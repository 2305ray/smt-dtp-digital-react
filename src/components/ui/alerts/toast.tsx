import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon,
  AlertCircleIcon,
} from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

export const TOAST_ICONS_FILLED = {
  success: CheckCircle2Icon,
  error: AlertCircleIcon,
  warning: AlertTriangleIcon,
  info: InfoIcon,
};

export const TOAST_ICONS_OUTLINE = {
  success: AlertCircleIcon,
  error: AlertCircleIcon,
  warning: AlertCircleIcon,
  info: AlertCircleIcon,
};

export const TOAST_COLORS = {
  success: {
    filled: "#2F8711",
    border: "#4D9834",
  },
  error: {
    filled: "#BA2532",
    border: "#E02D3C",
  },
  warning: {
    filled: "#FFD15B",
    border: "#FEBF1F",
  },
  info: {
    filled: "#167FE1",
    border: "#167FE1",
  },
};

const toastVariants = cva("flex gap-3 rounded-md font-medium transition-all", {
  variants: {
    variant: {
      filled: "",
      outline: "bg-transparent border",
    },
    state: {
      success: "",
      error: "",
      warning: "",
      info: "",
    },
    size: {
      sm: "px-3 py-2 text-xs w-[16rem] max-w-[90vw]",
      md: "px-4 py-3 text-sm w-[22rem] max-w-[90vw]",
      lg: "px-5 py-4 text-base w-[28rem] max-w-[95vw]",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "md",
    state: "success",
  },
});

export interface ToastProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof toastVariants>, "state"> {
  state?: ToastType;
  title?: string;
  description?: string;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    { className, variant, state, size, title, description, children, ...props },
    ref,
  ) => {
    const currentState: ToastType = state ?? "success";

    const Icon =
      variant === "outline"
        ? TOAST_ICONS_OUTLINE[currentState]
        : TOAST_ICONS_FILLED[currentState];

    const colors = TOAST_COLORS[currentState];
    const isFilled = variant === "filled";

    const isDarkBg =
      currentState === "success" ||
      currentState === "error" ||
      currentState === "info";

    const isWarning = currentState === "warning";

    const textColorClass = (() => {
      if (!isFilled) return "text-black";
      if (isWarning) return "text-black";
      if (isDarkBg) return "text-white";
      return "text-black";
    })();

    const getIconColors = () => {
      if (!isFilled) {
        return {
          fill: colors.border,
          stroke: "#ffff",
        };
      }

      if (currentState === "warning") {
        return {
          fill: "#000000",
          stroke: "#FFD15B",
        };
      }
      return {
        fill: "#ffffff",
        stroke: colors.filled,
      };
    };

    const iconColors = getIconColors();

    return (
      <div
        ref={ref}
        className={cn(
          toastVariants({ variant, state: currentState, size }),
          textColorClass,
          className,
        )}
        style={{
          backgroundColor: isFilled ? colors.filled : "transparent",
          borderColor: isFilled ? "transparent" : colors.border,
        }}
        {...props}
      >
        <div className="shrink-0 mt-0.5">
          <Icon
            size={22}
            fill={iconColors.fill}
            stroke={iconColors.stroke}
            strokeWidth={2}
          />
        </div>

        <div className="flex flex-col gap-0.5 leading-snug w-full">
          {title && <span className="font-semibold">{title}</span>}
          {description && (
            <span className="font-normal opacity-90 break-words">
              {description}
            </span>
          )}
          {!title && !description && (
            <span className="break-words">{children}</span>
          )}
        </div>
      </div>
    );
  },
);

Toast.displayName = "Toast";

export { Toast };
