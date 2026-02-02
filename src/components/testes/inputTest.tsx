import { Input } from "@/components/input/input";

export function InputTest() {
  return (
    <div className="text-center flex-col flex items-center gap-4">
      <Input placeholder="Digite seu nome"></Input>
        <Input placeholder="Digite seu email" disabled></Input>
        <Input placeholder="Digite sua senha" variant="error"></Input>

    </div>
  );
}
