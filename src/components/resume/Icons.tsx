type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type IconName =
  | "user"
  | "target"
  | "layers"
  | "search"
  | "grid"
  | "cursor"
  | "shield"
  | "chart"
  | "sparkle"
  | "users"
  | "compass"
  | "building"
  | "mail"
  | "phone"
  | "pin"
  | "check"
  | "map";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  switch (name) {
    case "user":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="8" r="3.6" />
          <path d="M4.5 20c.5-4 4-6.5 7.5-6.5s7 2.5 7.5 6.5" />
        </svg>
      );
    case "target":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" />
        </svg>
      );
    case "layers":
      return (
        <svg {...base} className={className}>
          <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
          <path d="M4 12.5L12 17l8-4.5" />
          <path d="M4 16.5L12 21l8-4.5" />
        </svg>
      );
    case "search":
      return (
        <svg {...base} className={className}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5L21 21" />
        </svg>
      );
    case "grid":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 3l6.5 16.5 2-7 7-2z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base} className={className}>
          <path d="M12 3l7 3v5.5c0 5-3.2 8-7 9-3.8-1-7-4-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...base} className={className}>
          <path d="M4 20h16" />
          <rect x="6" y="12" width="3" height="6" fill="currentColor" stroke="none" />
          <rect x="10.5" y="7" width="3" height="11" fill="currentColor" stroke="none" />
          <rect x="15" y="4" width="3" height="14" fill="currentColor" stroke="none" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path
            d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9-1.9 5.6-1.9-5.6-5.6-1.9 5.6-1.9z"
            fill="currentColor"
          />
        </svg>
      );
    case "users":
      return (
        <svg {...base} className={className}>
          <circle cx="9" cy="8.5" r="3.2" />
          <circle cx="17" cy="9.5" r="2.4" />
          <path d="M3.2 20c.4-3.6 2.9-5.8 5.8-5.8s5.4 2.2 5.8 5.8" />
          <path d="M15.5 14.6c2.3.3 4 2.2 4.3 5.4" />
        </svg>
      );
    case "compass":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "building":
      return (
        <svg {...base} className={className}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h1.2M14 7h1.2M9 11h1.2M14 11h1.2M9 15h1.2M14 15h1.2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="5.5" width="18" height="13" rx="1.6" />
          <path d="M3.5 6.5L12 13l8.5-6.5" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"
            fill="currentColor"
          />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path
            d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z"
            fill="currentColor"
          />
          <circle cx="12" cy="9" r="2.6" fill="white" />
        </svg>
      );
    case "check":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16.5 9" />
        </svg>
      );
    case "map":
      return (
        <svg {...base} className={className}>
          <path d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    default:
      return null;
  }
}

export function IconBadge({
  name,
  color,
  size = 34,
  className = "",
}: {
  name: IconName;
  color: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[10px] ${className}`}
      style={{ width: size, height: size, backgroundColor: `${color}1f`, color }}
    >
      <Icon name={name} className="h-[55%] w-[55%]" />
    </span>
  );
}
