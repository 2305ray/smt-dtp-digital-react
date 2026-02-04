import { Textarea as MyTextarea } from "@/components/textArea/textarea"; // Usando um apelido (alias)
import { CheckCircle2 } from "lucide-react";

export function TextareaPage() {
  return (
    <div className="text-center flex-col flex items-center gap-4 p-10">
      <MyTextarea placeholder="Descreva seu projeto..." />

      <MyTextarea
        placeholder="Bio do perfil"
        message="A bio deve ter pelo menos 10 caracteres."
      />

      <MyTextarea
        state="success"
        placeholder="Comentário"
        message="Comentário enviado com sucesso!"
        messageClassName="bg-green-600"
        messageIcon={<CheckCircle2 size={16} fill="white" stroke="#16a34a" />}
      />
    </div>
  );
}
