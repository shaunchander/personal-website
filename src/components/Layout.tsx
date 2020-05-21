import React from "react"

// Component imports
import Navbar from "./Navbar"
import Div100Vh from "react-div-100vh"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Div100Vh className="flex flex-col min-h-screen overflow-x-hidden leading-relaxed font-jost text-gunmetalDark">
      <header className="fixed inset-x-0 top-0 z-50 w-full h-16 bg-white md:bg-transparent">
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
    </Div100Vh>
  )
}

export default Layout
