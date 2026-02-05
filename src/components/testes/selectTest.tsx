import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Hamburger } from "lucide-react";
import { MultiSelect } from "../ui/select/multiSelect";
import { RadioGroup, RadioGroupItem } from "../ui/radioGroup/radioGroup";

const opcoesFrutas = [
  { value: "maca", label: "Maçã" },
  { value: "banana", label: "Banana" },
  { value: "uva", label: "Uva" },
  { value: "morango", label: "Morango" },
];

export default function SelecTest() {
  return (
    <div className="min-h-screen bg-white p-10 flex flex-col items-center gap-12">
      <section className="flex flex-col gap-2">
        <MultiSelect
          options={opcoesFrutas}
          placeholder="Escolha várias..."
          Icon={Hamburger}
          className=""
        />
      </section>

      <section className="flex flex-col gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Escolha uma fruta..." />
          </SelectTrigger>
          <SelectContent>
            {opcoesFrutas.map((fruta) => (
              <SelectItem key={fruta.value} value={fruta.value}>
                {fruta.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <RadioGroup defaultValue="opcao1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="opcao1" id="r1" />

          <label htmlFor="r1">Opção Azul (Padrão)</label>
          <RadioGroupItem value="opcao2" id="r2" />
          <label htmlFor="r2">Opção Azul (Padrão)</label>

          <RadioGroupItem value="opcao3" id="r3" />
          <label htmlFor="r3">Opção Azul (Padrão)</label>
        </div>
      </RadioGroup>
    </div>
  );
}
