import { LoadingStateLogin } from '@/components/LoadingStates/LoadingStateLogin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Login/accessType')({
  component: RouteComponent,
  pendingComponent: LoadingStateLogin,
})

function RouteComponent() {
  return <div>Hello "/Login/tipoAcesso"!</div>
}
