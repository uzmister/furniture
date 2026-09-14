interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const base = (size: number, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true
});

export const Sun = ({ size = 20, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </svg>
);

export const Moon = ({ size = 20, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a7 7 0 0 0 11.1 11.1Z" />
  </svg>
);

export const ArrowRight = ({ size = 18, strokeWidth = 2.2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const Zoom = ({ size = 18, strokeWidth = 2.2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.4-4.4M11 8.6v4.8M8.6 11h4.8" />
  </svg>
);

export const Heart = ({ size = 18, strokeWidth = 2, filled = false }: IconProps & { filled?: boolean }) => (
  <svg {...base(size, strokeWidth)} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20s-7.2-4.4-7.2-9.4A4.4 4.4 0 0 1 12 8.4a4.4 4.4 0 0 1 7.2 2.2C19.2 15.6 12 20 12 20Z" />
  </svg>
);

export const Check = ({ size = 18, strokeWidth = 2.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const Star = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9Z" />
  </svg>
);

export const Phone = ({ size = 20, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M6.6 3.5h2.2l1.6 4-2 1.3a11 11 0 0 0 5.3 5.3l1.3-2 4 1.6v2.2a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const MapPin = ({ size = 20, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 21s6.5-5.4 6.5-10.4A6.5 6.5 0 0 0 5.5 10.6C5.5 15.6 12 21 12 21Z" />
    <circle cx="12" cy="10.4" r="2.4" />
  </svg>
);

export const Clock = ({ size = 20, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3.2 2" />
  </svg>
);

export const Menu = ({ size = 20, strokeWidth = 2.4 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ size = 20, strokeWidth = 2.4 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Send = ({ size = 18, strokeWidth = 2.2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M20.5 3.5 3.8 10.2c-.8.3-.8 1.4 0 1.7l6 2.3 2.3 6c.3.8 1.4.8 1.7 0Z" />
    <path d="M20.5 3.5 9.8 14.2" />
  </svg>
);

export const Palette = ({ size = 26, strokeWidth = 1.9 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.4 0 2-.9 2-1.9 0-1.5-1.4-1.9-1.4-3.1 0-.9.8-1.6 1.8-1.6h1.6a4.5 4.5 0 0 0 4.5-4.5c0-3.2-3.7-5.9-8.5-5.9Z" />
    <circle cx="8" cy="11" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="8" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="10.3" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const Hammer = ({ size = 26, strokeWidth = 1.9 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M13.6 8.4 6.2 15.8a2.3 2.3 0 1 0 3.3 3.3l7.4-7.4" />
    <path d="M12.4 7.2 15.6 4a3.4 3.4 0 0 1 4.8 4.8l-3.2 3.2-4.8-4.8Z" />
    <path d="M9.2 10.4 6.6 7.8l2.6-2.6 2.6 2.6" />
  </svg>
);

export const Truck = ({ size = 26, strokeWidth = 1.9 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M2.5 7.5h10.5v9H2.5zM13 10.5h4l3.5 3.5v2.5H13z" />
    <circle cx="6.5" cy="18.5" r="1.8" />
    <circle cx="16.5" cy="18.5" r="1.8" />
  </svg>
);

export const Shield = ({ size = 26, strokeWidth = 1.9 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 3.2 5 6v5.6c0 4.2 3 7.4 7 8.8 4-1.4 7-4.6 7-8.8V6Z" />
    <path d="M9 12l2.2 2.2L15.4 10" />
  </svg>
);

export const Ruler = ({ size = 26, strokeWidth = 1.9 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M4.4 14.6 14.6 4.4l5 5L9.4 19.6z" />
    <path d="M7.6 11.4l1.8 1.8M10.4 8.6l1.8 1.8M13.2 5.8l1.8 1.8" />
  </svg>
);

export const Sparkle = ({ size = 26, strokeWidth = 1.9 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 3.5 13.6 9 19 10.6 13.6 12.2 12 17.7 10.4 12.2 5 10.6 10.4 9Z" />
    <path d="M18.5 16.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7Z" />
  </svg>
);

export const Instagram = ({ size = 18, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const Telegram = ({ size = 18, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M21 4.5 2.8 11.3c-.7.3-.7 1.3.1 1.5l4.3 1.2 1.6 5c.2.7 1.1.9 1.6.3l2.2-2.5 4.4 3.2c.6.4 1.4.1 1.6-.6L21.8 5.4c.2-.7-.4-1.2-.8-.9Z" />
  </svg>
);

export const Facebook = ({ size = 18, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M14.5 8.5h2.2V5.6h-2.2a3.4 3.4 0 0 0-3.4 3.4v1.6H8.6v2.9h2.5v7h3v-7h2.3l.5-2.9h-2.8V9.4c0-.5.4-.9.9-.9Z" />
  </svg>
);

export const Sofa = ({ size = 20, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M5 11V8.6A2.6 2.6 0 0 1 7.6 6h8.8A2.6 2.6 0 0 1 19 8.6V11" />
    <path d="M5 11.3a2.3 2.3 0 0 1 2.3 2.3v1.2h9.4v-1.2A2.3 2.3 0 0 1 19 11.3a2.3 2.3 0 0 1 2.3 2.3v6.1H2.7v-6.1A2.3 2.3 0 0 1 5 11.3Z" />
  </svg>
);
