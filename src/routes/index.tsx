import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button/buttons";
import backgroundWave1 from "@/assets/background-login-1.svg";
import backgroundWave2 from "@/assets/background-login-2.svg";
import dtpOutline from "@/assets/logo-dtp-outline.svg";
import prefeitura from "@/assets/logo-prefeitura.svg";
import logoDtpDigital from "@/assets/logo-dtp-digital-aprovado.png";
import govBrIcon from "@/assets/govBr-icon.svg";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate({ to: "/Login/accessType" });
  };

  return (
    <div className="min-h-screen w-full flex flex-col text-neutral-gray-5 overflow-x-hidden bg-white">
      <header className="w-full relative shrink-0">
        <img src={backgroundWave1} className="w-full h-auto" />
        <img
          src={backgroundWave2}
          className="h-auto absolute -top-2 -left-8 -rotate-2 origin-top-left w-[105%]"
        />
      </header>

      <div className="flex flex-col flex-1 w-full items-center">
        <section className="w-full flex flex-col items-center px-8 -mt-24 sm:-mt-32 z-10">
          <img
            src={logoDtpDigital}
            alt="Logo circular escrita dtp digital"
            className="w-40 h-auto mb-8"
          />

          <Button
            type="button"
            size="lg"
            className="w-full max-w-[320px] h-14 text-lg font-semibold shadow-lg"
            onClick={handleNavigation}
          >
            <span className="flex items-center justify-center gap-3">
              Entrar com conta
              <img src={govBrIcon} alt="gov.br" className="h-6 w-auto" />
            </span>
          </Button>
        </section>

        <main className="flex flex-col items-center justify-center flex-1 gap-8 my-16">
          <img
            src={prefeitura}
            alt="Logo Prefeitura"
            className="w-40 h-auto object-contain"
          />
          <img
            src={dtpOutline}
            alt="Logo DTP Outline"
            className="w-40 h-auto object-contain"
          />
        </main>

        <footer className="w-full flex flex-col items-center gap-8 pb-16">
          <Link
            to="/Login/$terms"
            params={{ terms: "termos" }}
            className="text-md font-semibold"
          >
            Termos de uso
          </Link>
          <Link
            to="/Login/$terms"
            params={{ terms: "politicas" }}
            className="text-md font-semibold"
          >
            Políticas de Privacidade
          </Link>
        </footer>
      </div>
    </div>
  );
}
