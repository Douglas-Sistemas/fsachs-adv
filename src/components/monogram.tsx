export function Monogram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 125" fill="none" aria-hidden="true">
      <path d="M50 5C34 14 19 17 7 19v45c0 23 19 41 43 56 24-15 43-33 43-56V19C78 17 64 12 50 5Z" stroke="currentColor" strokeWidth="3" />
      <path d="M50 11C35 19 23 22 13 24v40c0 20 16 35 37 49 21-14 37-29 37-49V24c-14-2-26-6-37-13Z" stroke="currentColor" strokeWidth=".65" />
      <text x="22" y="75" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="65" letterSpacing="-5">F</text>
      <text x="45" y="96" fill="currentColor" stroke="var(--monogram-cutout, transparent)" strokeWidth="1" paintOrder="stroke" fontFamily="Georgia, 'Times New Roman', serif" fontSize="65">S</text>
    </svg>
  );
}
