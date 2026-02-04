import * as React from "react";
import {
  Search,
  ChevronDown,
  Check,
  Minus,
  type LucideIcon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/_headless/command";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder: string;
  Icon?: LucideIcon;
  className?: string;
}

export function MultiSelect({
  options,
  placeholder,
  Icon = Search,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggle = (val: string) => {
    setSelected((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val],
    );
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected(options.map((o) => o.value));
    }
  };

  return (
    <div className="flex flex-col gap-1 w-fit font-sans ">
      <label className="text-sm font-normal text-black ml-0.5">Label</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex h-10 w-[360px] items-center justify-between rounded-md border-2 px-3 py-1 text-sm transition-all outline-none bg-white cursor-pointer",
              // Borda padrão cinza
              "border-neutral-gray-2",
              // Borda Verde 2px ao abrir ou focar
              "focus:border-green-500 data-[state=open]:border-green-500 focus:border-3  data-[state=open]:border-3 focus-visible:border-none",
              className,
            )}
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <Icon size={18} className="text-neutral-gray-4 shrink-0" />
              <div className="flex items-center gap-1.5 overflow-hidden text-neutral-gray-4">
                {selected.length > 0 ? (
                  <>
                    <span className="truncate max-w-[200px]">
                      {options.find((opt) => opt.value === selected[0])?.label}
                    </span>
                    {selected.length > 1 && (
                      <span className="shrink-0 font-medium text-neutral-gray-3">
                        (+{selected.length - 1})
                      </span>
                    )}
                  </>
                ) : (
                  placeholder
                )}
              </div>
            </div>
            <ChevronDown
              size={20}
              className="text-blue-3 fill-blue-3 shrink-0"
            />
          </button>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="start"
          sideOffset={3}
          className={cn(
            "w-[360px] p-0 bg-white border-2 border-neutral-200 rounded-md",
            // Sombra mais "fininha" e escura (menos blur, mais definição)
            "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]",
          )}
        >
          <Command className="bg-white">
            <CommandList className="bg-white max-h-[300px] overflow-y-auto">
              <CommandGroup className="p-0">
                <div className="p-2 border-b border-neutral-100">
                  <CommandItem
                    className={cn(
                      "flex items-center gap-3 py-2 px-3 font-bold cursor-pointer rounded-md transition-all",
                      selected.length === options.length
                        ? "bg-blue-3 text-white hover:opacity-80 data-[selected='true']:bg-blue-3/90"
                        : "bg-white text-neutral-700 data-[selected='true']:bg-neutral-100",
                    )}
                    onSelect={handleSelectAll}
                  >
                    <div
                      className={cn(
                        "rounded-sm p-0.5",
                        selected.length === options.length
                          ? "bg-white"
                          : "bg-blue-3",
                      )}
                    >
                      <Minus
                        size={14}
                        className={
                          selected.length === options.length
                            ? "text-blue-3"
                            : "text-white"
                        }
                        strokeWidth={4}
                      />
                    </div>
                    Selecionar todos
                  </CommandItem>
                </div>

                {options.map((opt, index) => {
                  const isSelected = selected.includes(opt.value);
                  return (
                    <div
                      key={opt.value}
                      className={cn(
                        index !== options.length - 1 &&
                          "border-b border-neutral-100",
                      )}
                    >
                      <CommandItem
                        onSelect={() => toggle(opt.value)}
                        className={cn(
                          "flex items-center gap-4 py-4 px-5 cursor-pointer transition-all",
                          isSelected
                            ? "bg-blue-3 text-white hover:opacity-80 data-[selected='true']:bg-blue-3/90"
                            : "text-neutral-600 data-[selected='true']:bg-neutral-100",
                        )}
                      >
                        <div
                          className={cn(
                            "w-5 h-5 border rounded flex items-center justify-center shrink-0",
                            isSelected
                              ? "bg-white border-white"
                              : "border-neutral-300 bg-white",
                          )}
                        >
                          {isSelected && (
                            <Check
                              size={14}
                              className="text-blue-3 stroke-[4]"
                            />
                          )}
                        </div>
                        <span className="font-medium text-sm">{opt.label}</span>
                      </CommandItem>
                    </div>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
