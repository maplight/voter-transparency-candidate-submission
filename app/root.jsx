import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react'
import stylesheet from './tailwind.css'

export const links = () => [{ rel: 'stylesheet', href: stylesheet }]

export default function App() {
  return (
    <html>
      <head>
        <link rel='icon' href='data:image/x-icon;base64,AA' />
        <Meta />
        <Links />
      </head>
      <body>
        <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
          <Outlet />
        </div>

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
