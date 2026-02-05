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
} from "@/components/ui/popover/popover";
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

  const allSelected = selected.length === options.length && options.length > 0;
  const noneSelected = selected.length === 0;
  const partiallySelected = !noneSelected && !allSelected;

  const toggle = (val: string) => {
    setSelected((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val],
    );
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(options.map((o) => o.value));
    }
  };

  return (
    <div className="flex flex-col gap-1 w-fit font-sans">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "flex h-10 w-[360px] items-center justify-between rounded-md border-2 bg-white px-3 py-1 text-sm transition-colors",
              "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
              "border-neutral-gray-2",
              "focus:border-green-500 focus-visible:border-green-500 outline-none focus:border-3",
              "data-[state=open]:border-green-500 data-[state=open]:border-3",

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
          sideOffset={6}
          className={cn(
            "w-[360px] p-0 bg-white border-2 border-neutral-200 rounded-md",
            "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]",
          )}
        >
          <Command className="bg-white">
            <CommandList className="bg-white max-h-[300px] overflow-y-auto">
              <CommandGroup className="p-0">
                <div className="p-2 border-b border-neutral-100">
                  <CommandItem
                    onSelect={handleSelectAll}
                    className={cn(
                      "flex items-center gap-3 py-2 px-3 font-bold cursor-pointer rounded-md transition-all",

                      allSelected
                        ? "bg-blue-3 text-white hover:opacity-90"
                        : partiallySelected
                          ? "bg-blue-3/10 text-blue-3"
                          : "bg-white text-neutral-700 hover:bg-neutral-100",
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 border rounded flex items-center justify-center shrink-0",
                        allSelected
                          ? "bg-white border-white"
                          : partiallySelected
                            ? "bg-blue-3 border-blue-3"
                            : "bg-white border-neutral-300",
                      )}
                    >
                      {allSelected && (
                        <Check size={14} className="text-blue-3 stroke-[4]" />
                      )}

                      {partiallySelected && (
                        <Minus size={14} className="text-white stroke-[4]" />
                      )}
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
                            ? "bg-blue-3 text-white hover:opacity-90"
                            : "text-neutral-600 hover:bg-neutral-100",
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
