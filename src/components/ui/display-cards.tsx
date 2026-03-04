"use client";

import { MessageCircle } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  category?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className = "",
  icon = <MessageCircle className="size-4 text-accent" />,
  title = "Featured",
  description = "Discover amazing content",
  category = "Scenario",
  iconClassName: _iconClassName,
  titleClassName = "text-copy",
}: DisplayCardProps) {
  return (
    <div
      className={[
        "relative flex h-44 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between",
        "rounded-brand border border-border bg-surface-white/80 backdrop-blur-sm",
        "px-5 py-4 transition-all duration-700",
        "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem]",
        "after:bg-gradient-to-l after:from-surface after:to-transparent after:content-['']",
        "hover:border-accent-soft/40 hover:bg-surface-white hover:shadow-card",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className,
      ].join(" ")}
    >
      <div>
        <span className="relative inline-flex items-center justify-center rounded-full bg-accent-tint p-1.5">
          {icon}
        </span>
        <p className="text-eyebrow font-body uppercase tracking-eyebrow text-accent-soft">
          {category}
        </p>
      </div>
      <p className={["font-heading text-lg tracking-heading leading-snug", titleClassName].join(" ")}>
        {title}
      </p>
      <p className="text-body-sm text-copy-mid leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      className: [
        "[grid-area:stack] hover:-translate-y-10",
        "before:absolute before:w-full before:h-full before:rounded-brand before:content-['']",
        "before:bg-blend-overlay before:bg-surface/50 before:outline-1 before:outline-border",
        "grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700",
        "hover:grayscale-0 before:left-0 before:top-0",
      ].join(" "),
    },
    {
      className: [
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1",
        "before:absolute before:w-full before:h-full before:rounded-brand before:content-['']",
        "before:bg-blend-overlay before:bg-surface/50 before:outline-1 before:outline-border",
        "grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700",
        "hover:grayscale-0 before:left-0 before:top-0",
      ].join(" "),
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center" style={{ animation: 'fadeIn 700ms ease both' }}>
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

export { DisplayCard };
export type { DisplayCardProps, DisplayCardsProps };
