# HelpBot - AI-Powered Customer Support Platform

Welcome to **HelpBot**, an innovative web application built with Next.js that revolutionizes customer support through intelligent AI. HelpBot delivers 24/7 support, instant AI responses, smart automation, and global business solutions—enhancing user experiences at scale. With a modern, responsive UI and seamless interactive components, HelpBot is trusted by over 10,000 businesses worldwide.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

HelpBot is a cutting-edge customer support solution leveraging AI for real-time assistance and automation. The application features a sleek hero section with rotating text highlights, a polished navigation bar, and interactive CTAs to engage users. Designed for scalability and ease of use, HelpBot is ideal for businesses seeking to streamline their support operations.

---

## Features

- **AI-Powered Support:** 24/7 customer assistance with instant AI responses.
- **Smart Automation:** Automates repetitive tasks to improve efficiency.
- **Global Solutions:** Tailored support for businesses worldwide.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Interactive UI:** Animated backgrounds, gradient effects, and smooth transitions.
- **Chat Modal:** Integrated chat functionality for real-time user interaction.
- **Social Proof:** Trusted by leading companies like Google and Microsoft.

---

## Technologies

- **Framework:** Next.js (React-based)
- **Styling:** Tailwind CSS & DaisyUI
- **Icons:** React Icons
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Animations:** Custom CSS with Tailwind utilities
- **Routing:** Next.js built-in routing
- **Dependencies:** Managed via npm

---

## Installation

To set up and run HelpBot locally:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/helpbot.git
    cd helpbot
    ```

2. **Install Dependencies**  
    Ensure you have Node.js and npm installed, then run:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**  
    Create a `.env.local` file in the root directory and add any necessary environment variables (e.g., API keys):
    ```
    NEXT_PUBLIC_API_URL=https://api.helpbot.com
    ```

4. **Run the Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**
    ```bash
    npm run build
    npm start
    ```

---

## Usage

- **Navigation:** Use the header to switch between Home, Features, Pricing, Testimonials, and Contact.
- **Chat Interaction:** Click "Start Free Trial" to open the chat modal and interact with AI support.
- **Explore Features:** Scroll or use "Discover More" to view detailed features.
- **Demo:** Click "Watch Demo" to simulate a demo experience (currently logs to console).

---

## Example Components

- **Hero:** Main landing page with animated text and CTAs.
- **Header:** Responsive navigation bar with login/logout.
- **ChatModal:** Modal for real-time chat support.

---

## Project Structure

```
helpbot/
├── app/
│   ├── components/
│   │   ├── ChatModal.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   ├── layout.jsx
│   ├── page.jsx
│   └── ...
├── public/
│   ├── assets/
│   └── ...
├── styles/
│   ├── globals.css
│   └── ...
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
```

- `app/components/`: Reusable React components (e.g., `Header.jsx`, `Hero.jsx`)
- `public/`: Static assets (images, icons)
- `styles/`: Global CSS files, including Tailwind configs
- `.env.local`: Environment variables for development

---

## Contributing

We welcome contributions to improve HelpBot!

1. **Fork the Repository** on GitHub.
2. **Create a Branch**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make Changes** and test thoroughly.
4. **Commit Changes**
    ```bash
    git commit -m "Describe your changes"
    ```
5. **Push to GitHub**
    ```bash
    git push origin feature/your-feature-name
    ```
6. **Submit a Pull Request** detailing your changes and referencing any issues.

**Guidelines:**

- Follow the existing code style (Tailwind classes, React hooks).
- Write clear commit messages and add comments where necessary.
- Ensure tests pass and the app builds without errors.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions, support, or collaboration:

- **Email:** [support@helpbot.com](mailto:support@helpbot.com)
- **GitHub:** [yourusername/helpbot](https://github.com/yourusername/helpbot)
- **Website:** [https://helpbot.com](https://helpbot.com)

---

_Last updated: Thursday, June 19, 2025, 11:26 AM +06_
