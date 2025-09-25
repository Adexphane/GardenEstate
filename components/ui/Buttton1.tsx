import React from "react";
import {
  User,
  Settings,
  Download,
  Send,
  Plus,
  Trash2,
  Edit,
  Save,
} from "lucide-react";

// Type definitions
type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "outline"
  | "outline2"
  | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ComponentType<{
    style?: React.CSSProperties;
    className?: string;
  }>;
  iconPosition?: IconPosition;
  loading?: boolean;
}

// Reusable Button Component
const Button1: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-manrope font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[white] text-Black hover:bg-white/90 focus:ring-white/20 shadow-sm rounded-lg",
    secondary:
      "bg-neutral-900 text-white hover:bg-neutral-700 focus:ring-gray-500 border border-gray-300 rounded-lg",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm rounded-lg",
    success:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm rounded-lg",
    outline:
      "border-2 rounded-full border-neutral-900 text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-900",
    outline2:
      "border-2 rounded-full border-white/90 text-white/90 hover:bg-white/10 focus:ring-white/10",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 rounded-lg",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "text-sm gap-1.5",
    md: "text-sm gap-2",
    lg: "text-base gap-2.5",
  };

  // Custom styles for vh-based sizing
  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: {
      paddingLeft: "1.5vh",
      paddingRight: "1.5vh",
      paddingTop: "1vh",
      paddingBottom: "1vh",
      fontSize: "1.8vh",
    },
    md: {
      paddingLeft: "2vh",
      paddingRight: "2vh",
      paddingTop: "1.5vh",
      paddingBottom: "1.5vh",
      fontSize: "2vh",
    },
    lg: {
      paddingLeft: "3vh",
      paddingRight: "3vh",
      paddingTop: "1.5vh",
      paddingBottom: "1.5vh",
      fontSize: "2.2vh",
    },
  };

  const iconSizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: { width: "2vh", height: "2vh" },
    md: { width: "2vh", height: "2vh" },
    lg: { width: "2.5vh", height: "2.5vh" },
  };

  const gapStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: { gap: "0.75vh" },
    md: { gap: "1vh" },
    lg: { gap: "1.25vh" },
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const renderIcon = () => {
    if (loading) {
      return (
        <div
          className='animate-spin rounded-full border-2 border-white border-t-transparent'
          style={iconSizeStyles[size]}
        />
      );
    }
    if (Icon) {
      return <Icon style={iconSizeStyles[size]} />;
    }
    return null;
  };

  return (
    <button
      className={buttonClasses}
      style={{ ...sizeStyles[size], ...gapStyles[size] }}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {iconPosition === "left" && renderIcon()}
      {children && <span>{children}</span>}
      {iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button1;
