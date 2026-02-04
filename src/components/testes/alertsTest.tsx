import { Alert } from "@/components/alerts/alert";
import { cn } from "@/lib/utils";

export function AlertsTest({style}:{style: string}) {
    const styles = {
        success: '',
        error: '',
        warning: '',
        info: '',
    } as any





  return (
    <>
    <div className={cn(styles[style])} />
    <div className="flex items-center justify-center">
    <Alert state="warning">
      Em caso de dúvida, não compartilhe sua senha.
    </Alert>
     <Alert state="warning">
      Em caso de dúvida, não compartilhe sua senha.
    </Alert>
    </div>
    </>
  );
}
