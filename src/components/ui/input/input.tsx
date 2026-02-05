import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleXIcon } from "lucide-react";

const inputVariants = cva(
  "flex h-10 w-[360px] rounded-md border-2 bg-transparent pl-4 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm placeholder:text-neutral-gray-4",
  {
    variants: {
      state: {
        default:
          "border-neutral-gray-2 text-neutral-gray-4 focus-visible:border-green-500 focus:border-green-500",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

export interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  message?: string;
  messageClassName?: string;
  messageIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      state,
      message,
      messageClassName,
      messageIcon,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const currentState = message && !state ? "error" : state;

    return (
      <div className="flex flex-col gap-1.5 w-fit">
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 flex items-center justify-center text-neutral-gray-4 pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              inputVariants({ state: currentState, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 flex items-center justify-center text-neutral-gray-4">
              {rightIcon}
            </div>
          )}
        </div>

        {message && (
          <div
            className={cn(
              "flex items-center gap-1.5 bg-red-600 text-white text-[10px] rounded-sm px-2 py-0.5 w-fit ml-0.5 transition-all",
              messageClassName,
            )}
          >
            <div className="shrink-0 flex items-center justify-center">
              {messageIcon ? (
                messageIcon
              ) : (
                <CircleXIcon
                  size={16}
                  fill="white"
                  stroke="#dc2626"
                  className="opacity-90"
                />
              )}
            </div>
            <span className="font-normal text-[12px] leading-none">
              {message}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
