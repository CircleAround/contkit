import { Outlet } from 'react-router-dom'
import { FlashMessage } from './FlashMessage'

export default function UserLayout(): JSX.Element {
  return (
    <div>
      <Header />
      <FlashMessage />
      <Outlet />
    </div>
  )
}

function Header() {
  return <header>Console</header>
}
