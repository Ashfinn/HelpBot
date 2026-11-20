/* eslint-disable @next/next/no-img-element */
// HelpBot mascot avatar. `zoom` crops in on the face so it reads well at small sizes.
export default function Mascot({ zoom = 1.7, className = '' }) {
  return (
    <span className={`block w-full h-full rounded-full overflow-hidden bg-white ${className}`}>
      <img
        src="/mascot.jpg"
        alt="HelpBot mascot"
        className="w-full h-full object-cover"
        style={{ transform: `scale(${zoom})`, transformOrigin: '50% 34%' }}
      />
    </span>
  );
}
