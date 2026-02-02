import { ButtonsTest } from "@/components/testes/buttonsTest";
import { InputTest } from "@/components/testes/inputTest";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="text-center">
     <ButtonsTest />
     <InputTest />
    </div>
  );
}
