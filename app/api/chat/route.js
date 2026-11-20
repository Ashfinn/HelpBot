import { NextResponse } from 'next/server';

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Any model ending in ":free" is free on OpenRouter (rate-limited).
// Browse options: https://openrouter.ai/models?max_price=0
const DEFAULT_MODEL = 'openrouter/free'; // auto-picks an available free model

const SYSTEM_PROMPT =
  'You are HelpBot, a friendly and concise customer support assistant. ' +
  'Answer clearly and helpfully. If you do not know something, say so.';

export async function POST(req) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENROUTER_API_KEY is not set on the server.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const history = Array.isArray(body?.messages) ? body.messages : [];
  // Keep only the last 20 turns and sanitize roles/content.
  const messages = history
    .slice(-20)
    .filter((m) => m && typeof m.content === 'string' && m.content.trim())
    .map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content.slice(0, 4000),
    }));

  if (messages.length === 0) {
    return NextResponse.json({ error: 'No message provided.' }, { status: 400 });
  }

  try {
    const res = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // Optional attribution headers used by OpenRouter rankings.
        'HTTP-Referer': process.env.OPENROUTER_SITE_URL || 'http://localhost:3000',
        'X-Title': 'HelpBot',
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg = data?.error?.message || `OpenRouter error (${res.status})`;
      return NextResponse.json({ error: msg }, { status: res.status });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ reply: reply || "Sorry, I couldn't generate a response." });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to reach OpenRouter.' }, { status: 502 });
  }
}
