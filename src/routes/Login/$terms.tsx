import { Button } from "@/components/ui/button/buttons";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import logoDtpDigital from "@/assets/logo-dtp-digital-aprovado.png";
import { LoadingStateLogin } from "@/components/LoadingStates/LoadingStateLogin";

export const Route = createFileRoute("/Login/$terms")({
  loader: async () => {
    console.log("Iniciando simulação de carregamento...");
    await new Promise((r) => setTimeout(r, 10000)); // 5 segundos
    return null;
  },
  // ADICIONE ESTA LINHA AQUI:
  pendingComponent: LoadingStateLogin,

  component: TermosEPoliticasPage,
});

function TermosEPoliticasPage() {
  const { terms } = Route.useParams();

  const content = {
    termos: {
      titulo: "Termos de Uso",
      texto: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
    },
    politicas: {
      titulo: "Políticas de Privacidade",
      texto: "Aqui explicamos como cuidamos dos seus dados...",
    },
  };

  const data = content[terms as keyof typeof content] || content.termos;

  return (
    <div className="min-h-screen w-full flex flex-col p-6 bg-white overflow-x-hidden">
      <header className="w-full max-w-3xl mx-auto mb-24 flex justify-start">
        <Button
          variant="noneOutline"
          onClick={() => window.history.back()}
          className="text-md flex items-center gap-1 -ml-6 text-black"
        >
          <ChevronLeft strokeWidth={2.4} className="size-5" />
          Voltar
        </Button>
      </header>

      <div className="flex flex-col flex-1 w-full max-w-3xl mx-auto items-center">
        <img src={logoDtpDigital} className="w-32 h-auto mb-8" alt="Logo" />
        <h2 className="font-bold text-xl mb-8">{data.titulo}</h2>
        <article className="w-full">
          <p className="text-justify leading-relaxed font-medium">
            {data.texto}
          </p>
        </article>
      </div>
    </div>
  );
}
