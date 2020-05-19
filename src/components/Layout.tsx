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
    <Div100Vh className="flex flex-col">
      <header className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <motion.main
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 100,
        }}
        className="flex-1 leading-relaxed font-jost text-gunmetalDark"
      >
        {children}
      </motion.main>
    </Div100Vh>
  )
}

export default Layout
