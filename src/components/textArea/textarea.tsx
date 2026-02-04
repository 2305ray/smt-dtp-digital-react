import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleXIcon } from "lucide-react";

const textareaVariants = cva(
  "flex min-h-[126px] w-[360px] rounded-md border-2 bg-transparent px-3 py-2 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm placeholder:text-neutral-gray-4",
  {
    variants: {
      state: {
        default:
          "border-neutral-gray-2 text-neutral-gray-4 focus-visible:ring-ring",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  message?: string;
  messageClassName?: string;
  messageIcon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, state, message, messageClassName, messageIcon, ...props },
    ref
  ) => {
    const currentState = message && !state ? "error" : state;

    return (
      <div className="flex flex-col gap-1.5 w-fit">
        <textarea
          ref={ref}
          className={cn(textareaVariants({ state: currentState, className }))}
          {...props}
        />

        {message && (
          <div
            className={cn(
              "flex items-center gap-1.5 bg-red-600 text-white text-[10px] rounded-sm px-2 py-0.5 w-fit ml-0.5 transition-all",
              messageClassName
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
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
