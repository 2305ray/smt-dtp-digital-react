import { Input } from "@/components/input/input";
import { CheckCircle2, EyeIcon, User } from "lucide-react";
import { Checkbox } from "../checkbox/checkbox";
import { RadioGroup } from "../radioGroup/radioGroup";

export function InputTest() {
  return (
    <div className="text-center flex-col flex items-center gap-4">
      <Input placeholder="Digite seu nome"></Input>
      <Input
        placeholder="Digite seu usuário"
        leftIcon={<User size={18} />}
        rightIcon={
          <button
            type="button"
            onClick={() => console.log("Clicou no ícone!")}
            className="p- rounded-full transition-colors"
          >
            <EyeIcon size={18} />
          </button>
        }
      />

      <Input
        state="success"
        placeholder="Nome de usuário"
        message="Usuário disponível!"
        messageClassName="bg-green-600"
        messageIcon={<CheckCircle2 size={16} fill="white" stroke="#16a34a" />}
      />
      <Input placeholder="Digite seu email" disabled></Input>
      <Input
        state="error"
        placeholder="Digite sua senha"
        message="Campo inválido!"
      ></Input>

      <p className="flex gap-1"><Checkbox /> Texto de teste</p>
      <p className="flex gap-1"><RadioGroup defaultValue=""/> Texto de teste</p>
    </div>
  );
}
