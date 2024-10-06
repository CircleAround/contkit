import { FC, PropsWithChildren } from 'react'

// import './variables.css'
// import './global.css'
const Template:FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Template
