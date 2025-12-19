import { ReactNode } from "react";

interface SkillBadgeProps {
  name: string;
  icon?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "neutral";
}

const variantStyles = {
  primary: "border-primary/30 hover:border-primary hover:shadow-glow-cyan",
  secondary:
    "border-secondary/30 hover:border-secondary hover:shadow-glow-purple",
  accent: "border-accent/30 hover:border-accent hover:shadow-glow-pink",
  info: "border-cyan-400/30 hover:border-cyan-400",
  success: "border-emerald-400/30 hover:border-emerald-400",
  warning: "border-orange-400/30 hover:border-orange-400",
  neutral: "border-white/20 hover:border-white/40",
};

const SkillBadge = ({ name, icon, variant = "primary" }: SkillBadgeProps) => {
  return (
    <div className={`skill-badge ${variantStyles[variant]} cursor-default`}>
      {icon && <span className="text-base">{icon}</span>}
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;
