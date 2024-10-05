import { Link } from 'react-router-dom'
import { blogs$index } from '@bistrio/routes/main/named_endpoints'

export function Index() {
  return (
    <>
      <h1>Index</h1>
      <Link to={blogs$index.path()}>Blogs</Link>
    </>
  )
}

export { Index as Page }
