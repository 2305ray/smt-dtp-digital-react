import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CircleXIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon,
} from "lucide-react";



export const ALERT_ICONS = {
  success: (
    <CheckCircle2Icon
      size={22}
      fill="#168821"
      stroke="#DCF5E7"
      strokeWidth={2.0}
    />
  ),

  error: (
    <CircleXIcon
      size={22}
      fill="#E52207"
      stroke="#FDE2E2"
      strokeWidth={1.9}
    />
  ),

  warning: (
    <AlertTriangleIcon
      size={22}
      fill="currentColor"
      stroke="#FFF5C2"
      strokeWidth={1.8}
    />
  ),

  info: (
    <InfoIcon
      size={22}
      fill="#155BCB"
      stroke="#DBEAFE"
      strokeWidth={2.0}
    />
  ),
};


export const ALERT_BASE =
  "flex items-start gap-3  px-5 py-3 text-sm  transition-colors max-w-[800px] max-w-[90vw] break-words";


export const alertVariants = cva(ALERT_BASE, {
  variants: {
    state: {
      success: " bg-[#E3F5E1]",
      error: " bg-[#FDE0DB] ",
      warning: " bg-[#FFF5C2]",
      info: "bg-[#D4E5FF]",
    },
  },
  defaultVariants: {
    state: "info",
  },
});

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  message?: string;
  leftIcon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, state, message, leftIcon, children, ...props }, ref) => {
    const icon = leftIcon ?? ALERT_ICONS[state ?? "info"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ state }), className)}
        {...props}
      >
        {icon && (
          <div className="shrink-0 flex items-center justify-center">
            {icon}
          </div>
        )}

        <div className="max-w-[640px] mx-auto">{message || children}</div>
      </div>
    );
  },
);

Alert.displayName = "Alert";

export { Alert };
