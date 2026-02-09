import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button/buttons";
import backgroundWave1 from "@/assets/background-login-1.svg";
import backgroundWave2 from "@/assets/background-login-2.svg";
import logoDtpDigital from "@/assets/logo-dtp-digital-aprovado.png";
import logoPrefeitura from "@/assets/logo-prefeitura.svg";
import logoDtp from "@/assets/logo-dtp-outline.svg";
import govBrIcon from "@/assets/govBr-icon.svg";
import { Bg } from "@/bg";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
const navigate = useNavigate()

const handleNavigation = () => {
  navigate ({
    to: "/Login/accessType"
  })
}


  return (
    <div className="min-h-screen w-full flex flex-col text-neutral-gray-5 overflow-x-hidden">
      <header className="w-full relative shrink-0">
        <img src={backgroundWave1} className="w-full h-auto" alt="" />
        <img
          src={backgroundWave2}
          className="h-auto absolute -top-[0.5vw] -left-[4vw] -rotate-2 origin-top-left w-[105%]"
          alt=""
        />
      </header>

      <div className="flex flex-col flex-1 w-full items-center justify-between">
        <section className="w-full flex flex-col items-center px-[5vw] -mt-[16vw] sm:-mt-[10vw] z-10">
          <img
            src={logoDtpDigital}
            alt="DTP Digital"
            className="w-[clamp(120px,30vw,200px)] h-auto mb-[16vw] sm:mb-8"
          />

          <Button
            type="button"
            size="lg"
            className="w-[clamp(260px,72vw,320px)] h-[clamp(48px,8vw,64px)]  text-[clamp(1.1rem,2vw,18px)] font-semibold"
            onClick={handleNavigation}
          >
            <span className="flex items-center justify-center gap-[2vw] sm:gap-3">
              Entrar com conta
              <govBr/>
              <img
                src={govBrIcon}
                alt="gov.br"
                className="h-[clamp(24px,2.5vw,32px)] w-auto object-contain"
              />
            </span>
          </Button>
        </section>

        <main className="w-full flex flex-col items-center px-8 gap-[8vw] my-[8vw]">
         <Bg />
        </main>

        <footer className="w-full flex flex-col items-center gap-[8vw] pb-[12vw]">
          <Link
            to="/Login/$terms"
            params={{ terms: "termos" }}
            className="text-[clamp(16px,4vw,24px)] font-semibold underline underline-offset-4"
          >
            Termos de uso
          </Link>
          <Link
            to="/Login/$terms"
            params={{ terms: "politicas" }}
            className="text-[clamp(16px,4vw,24px)] font-semibold underline underline-offset-4"
          >
            Políticas de Privacidade
          </Link>
        </footer>
      </div>
    </div>
  );
}
