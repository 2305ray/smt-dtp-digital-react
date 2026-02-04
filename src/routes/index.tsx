import { AlertsTest } from "@/components/testes/alertsTest";
import { ButtonsTest } from "@/components/testes/buttonsTest";
import { InputTest } from "@/components/testes/inputTest";
import SelectTest from "@/components/testes/selectTest";
import { TextareaPage } from "@/components/testes/textAreaTest";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="text-center items-center flex flex-col gap-4 pb-10">
     <ButtonsTest />
     <InputTest />
     <TextareaPage />
     <SelectTest />
     <AlertsTest style={""} />
    </div>
  );
}
