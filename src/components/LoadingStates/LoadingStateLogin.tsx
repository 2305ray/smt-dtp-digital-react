import backgroundWave1 from "@/assets/background-login-1.svg";
import backgroundWave2 from "@/assets/background-login-2.svg";
import logoDtpDigital from "@/assets/logo-dtp-digital-aprovado.png";

export function LoadingStateLogin() {
  return (
    <div className="min-h-screen w-full flex flex-col text-neutral-gray-5 overflow-x-hidden bg-white">
      <header className="w-full relative shrink-0">
        {/* Onda Clara (Fundo) */}
        <img src={backgroundWave1} className="w-full h-auto" alt="" />

        {/* Onda Escura (Frente) */}
        <img
          src={backgroundWave2}
          className="h-auto absolute -top-[0.5vw] -left-[4vw] -rotate-2 origin-top-left w-[105%]"
          alt=""
        />

        {/* Logo DTP Digital - Posicionamento idêntico à imagem */}
        <img
          src={logoDtpDigital}
          alt="DTP Digital"
          className="
            absolute z-50
            left-[10vw]       /* Distância da borda esquerda */
            top-[8vw]        /* Distância do topo */
            w-[clamp(100px,25vw,160px)] /* Tamanho fluido */
            h-auto
          "
        />
      </header>
    </div>
  );
}
