import React from "react"

// Component imports
import Div100vh from "react-div-100vh"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="leading-relaxed font-jost text-gunmetalDark">
      <Div100vh className="relative overflow-x-hidden">{children}</Div100vh>
    </main>
  )
}

export default Layout
