import { Alert } from "@/components/ui/alerts/alert";
import { Toast } from "../ui/alerts/toast";

export function AlertsTest() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-2">
        <Alert state="warning">
          Em caso de dúvida, não compartilhe sua senha.
        </Alert>
        <Alert state="info">
          <strong>Em caso de dúvida </strong>, não compartilhe sua senha.
        </Alert>
        <Alert state="success" className="w-[40rem]">
          Em caso de dúvida, não compartilhe sua senha.
        </Alert>
        <Alert state="error">
          Em caso de dúvida, não compartilhe sua senha.
        </Alert>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <Toast variant="outline" state="info" size="lg">
          Informação importante do sistema.
        </Toast>
        <Toast variant="outline" state="warning" size="lg">
          Informação importante do sistema.
        </Toast>

        <Toast variant="outline" state="success" size="md">
          Informação importante do sistema.
        </Toast>

        <Toast variant="outline" state="error" size="lg">
          Informação importante do sistema.
        </Toast>


        <Toast variant="filled" state="info" size="lg">
          Informação importante do sistema.
        </Toast>

        <Toast variant="filled" state="success" size="lg" >
          Informação importante do sistema.
        </Toast>

        <Toast variant="filled" state="warning" size="lg" className="h-[5rem] w-xl">
          Informação importante do sistema.
        </Toast>

        <Toast variant="filled" state="error" size="lg">
          Informação importante do sistema.
        </Toast>
      </div>
    </>
  );
}
