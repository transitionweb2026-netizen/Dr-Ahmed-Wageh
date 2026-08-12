import type { SVGProps } from "react";
import type { SocialLink } from "@/data/types";

type IconProps = SVGProps<SVGSVGElement>;

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function FacebookIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M14 8.5h-1.5A1.5 1.5 0 0 0 11 10v1.5H9.5v2H11V17h2v-3.5h1.7l.3-2H13V10a.5.5 0 0 1 .5-.5H14z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M4 20l1.4-4.1A7.5 7.5 0 1 1 8.8 19L4 20z" />
      <path d="M9 10.3c0 3 2.7 5.7 5.7 5.7.5 0 .9-.6.7-1.1l-.5-1.1a.8.8 0 0 0-.9-.4l-.9.3a4.2 4.2 0 0 1-2.8-2.8l.3-.9a.8.8 0 0 0-.4-.9l-1.1-.5c-.5-.2-1.1.2-1.1.7z" />
    </svg>
  );
}

const icons: Record<SocialLink["platform"], (props: IconProps) => React.JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsAppIcon,
};

interface SocialIconProps extends IconProps {
  platform: SocialLink["platform"];
}

export function SocialIcon({ platform, ...props }: SocialIconProps) {
  const Icon = icons[platform];
  return <Icon {...props} />;
}
