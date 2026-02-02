import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-[360px] h-[40px] placeholder:text-neutral-gray-4 border-2 border-neutral-gray-2 text-neutral-gray-4 rounded-md px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "placeholder:text-neutral-gray-4",
        error:
          "text-red-500 placeholder:text-red-300 border-red-500 focus-visible:ring-red-500",
      },
      error: {
        true: "border-red-500 focus-visible:ring-red-500",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      error: false,
    },
  },
);

export interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  errorMessage?: string;
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      error,
      errorMessage,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? React.Fragment : "input";

    return (
      <div className="flex flex-col w-full">
        <Comp
          ref={ref as any}
          className={cn(
            inputVariants({ variant, error, className }),
          )}
          {...props}
        />
        {error && errorMessage && (
          <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
