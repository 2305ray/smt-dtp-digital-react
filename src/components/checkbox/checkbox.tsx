"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 active:scale-95 active:outline-4 active:outline-green-500 active:outline-offset-[-2px] focus-visible:outline-4 focus-visible:outline-green-500 focus-visible:outline-offset-[-2px]",
  {
    variants: {
      variant: {
        // Estado padrão (Vazio/Borda cinza)
        default: "border-neutral-300 bg-white",
        // Borda verde no foco/seleção
        greenBorder: "border-neutral-300 data-[state=checked]:border-green-500 data-[state=indeterminate]:border-green-500 bg-white",
        // Fundo azul + Check Branco
        filled: "border-neutral-300 data-[state=checked]:bg-blue-3 data-[state=checked]:border-blue-3",
        // Fundo azul + Traço Branco
        indeterminate: "border-neutral-300 data-[state=indeterminate]:bg-blue-3 data-[state=indeterminate]:border-blue-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, checked: propsChecked, onCheckedChange, ...props }, ref) => {
  // Estado interno para gerenciar a alternância
  const [internalChecked, setInternalChecked] = React.useState<CheckboxPrimitive.CheckedState>(propsChecked ?? false);

  // Atualiza se a prop externa mudar
  React.useEffect(() => {
    if (propsChecked !== undefined) setInternalChecked(propsChecked);
  }, [propsChecked]);

  const handleToggle = () => {
    let nextState: CheckboxPrimitive.CheckedState;

    if (variant === "indeterminate") {
      // Se a variante escolhida for indeterminate: alterna entre vazio (false) e traço ("indeterminate")
      nextState = internalChecked === "indeterminate" ? false : "indeterminate";
    } else {
      // Comportamento normal para default e filled: alterna entre false e true
      nextState = !internalChecked;
    }

    setInternalChecked(nextState);
    if (onCheckedChange) onCheckedChange(nextState);
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      // Passamos a variante para o CVA para pegar os estilos de data-[state]
      className={cn(checkboxVariants({ variant, className }))}
      {...props}
      checked={internalChecked}
      onCheckedChange={handleToggle}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current w-full h-full")}
      >
        {internalChecked === "indeterminate" ? (
          <Minus className="h-3.5 w-3.5 text-white stroke-[4]" />
        ) : (
          <Check
            className={cn(
              "h-3.5 w-3.5 stroke-[4]",
              variant === "filled" ? "text-white" : "text-blue-3"
            )}
          />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
