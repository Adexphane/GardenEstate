import { ArrowUpRight } from "lucide-react";
import MagneticElement from "../cursor/MagneticElement";

// Assuming you have MagneticElement component

type SizeType = "small" | "medium" | "large";

interface MagneticButtonProps {
  size?: SizeType;
  icon?: React.ComponentType<any>;
  magneticStrength?: number;
  className?: string;
  iconProps?: React.ComponentProps<any>;
}

const MagneticButton = ({
  size = "medium",
  icon: Icon = ArrowUpRight,
  magneticStrength = 0.5,
  className = "",
  iconProps = {},
}: MagneticButtonProps) => {
  // Size configurations
  const sizeConfig: Record<
    SizeType,
    { container: string; icon: string; rounded: string }
  > = {
    small: {
      container: "w-12 h-12",
      icon: "w-4 h-4",
      rounded: "rounded-2xl",
    },
    medium: {
      container: "w-16 h-16",
      icon: "w-6 h-6",
      rounded: "rounded-3xl",
    },
    large: {
      container: "w-20 h-20",
      icon: "w-8 h-8",
      rounded: "rounded-3xl",
    },
  };

  const config = sizeConfig[size];

  return (
    <MagneticElement strength={magneticStrength} className={className}>
      <div
        className={`${config.container} bg-white group-hover:bg-black ${config.rounded} shadow-sm flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-none`}
      >
        <Icon
          className={`${config.icon} text-gray-600 group-hover:text-white transition-colors duration-300`}
          strokeWidth={1.5}
          {...iconProps}
        />
      </div>
    </MagneticElement>
  );
};

export default MagneticButton;
