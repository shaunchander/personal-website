import React from "react"

// Component imports
import Navbar from "./Navbar"
import Div100Vh from "react-div-100vh"

import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Div100Vh className="flex flex-col min-h-screen overflow-x-hidden leading-relaxed font-jost text-gunmetalDark">
      <header className="sticky inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
    </Div100Vh>
  )
}

export default Layout
