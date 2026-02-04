import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CircleXIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon,
} from "lucide-react";

/* ============================
   VARIÁVEIS DO DESIGN SYSTEM
============================ */

// Ícones por tipo
export const ALERT_ICONS = {
  success: <CheckCircle2Icon size={22}  fill="currentColor" stroke="none"/>,
  error: <CircleXIcon size={22} />,
  warning: <AlertTriangleIcon size={22} fill="currentColor" stroke="#FFF5C2"/>,
  info: <InfoIcon size={22} />,
  default: null,
};

// Classes base
export const ALERT_BASE =
  "flex items-start gap-3  px-5 py-3 text-sm shadow-sm transition-colors w-[800px] max-w-[90vw] break-words";

// Variantes de estilo
export const alertVariants = cva(ALERT_BASE, {
  variants: {
    state: {
      default: "bg-neutral-50 text-neutral-gray-4",
      success: " bg-green-50 text-green-700",
      error: " bg-red-50 text-red-700",
      warning: " bg-[#FFF5C2]",
      info: "bg-blue-50 text-blue-700",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

/* ============================
   TYPES
============================ */

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  message?: string;
  leftIcon?: React.ReactNode;
}

/* ============================
   COMPONENT
============================ */

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, state, message, leftIcon, children, ...props }, ref) => {
    const icon = leftIcon ?? ALERT_ICONS[state ?? "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ state }), className)}
        {...props}
      >
        {/* Left Icon */}
        {icon && (
          <div className="shrink-0 flex items-center justify-center">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="max-w-[640px] mx-auto">{message || children}</div>
      </div>
    );
  },
);

Alert.displayName = "Alert";

export { Alert };
