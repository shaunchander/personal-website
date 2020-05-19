import React from "react"

// Component imports
import Section from "./Section"
import Text from "../components/Text"
import { motion, useCycle } from "framer-motion"
import NavLink from "./NavLink"

const Navbar = () => {
  const [open, toggleOpen] = useCycle(false, true)
  return (
    <motion.nav className="absolute inset-0" animate={open ? "open" : "closed"}>
      <Section className="relative z-10">
        <motion.button
          onClick={() => toggleOpen()}
          className="focus:outline-none active:outline-none"
        >
          <span className="sr-only">Menu</span>
          <motion.div
            className="block w-8 h-1 mb-2"
            variants={{
              closed: { rotate: 0, y: 0, background: `#2F323A` },
              open: { rotate: -45, y: 6, background: `#fff` },
            }}
          >
            &nbsp;
          </motion.div>
          <motion.div
            className="block w-8 h-1 mb-2"
            variants={{
              closed: { rotate: 0, y: 0, background: `#2F323A` },
              open: { rotate: 45, y: -6, background: `#fff` },
            }}
          >
            &nbsp;
          </motion.div>
        </motion.button>
      </Section>
      <motion.div
        variants={{
          closed: { top: "-100vh" },
          open: { top: 0 },
        }}
        className="fixed inset-x-0 w-full h-full bg-syncore"
        style={{ top: "-100vh" }}
        transition={{ transition: { ease: "circIn", duration: 0.5 } }}
      >
        <Section className="h-full">
          <motion.ul
            variants={{
              open: {
                transition: { delayChildren: 0.5, staggerChildren: 0.25 },
              },
            }}
            className="flex flex-col justify-center h-full text-4xl font-extrabold text-white uppercase lg:text-6xl"
          >
            <NavLink to="/">🏠 Home</NavLink>
            <NavLink to="/about">🧑 About</NavLink>
            <NavLink to="/projects">📈 Projects</NavLink>
            <NavLink to="/contact">💬 Contact</NavLink>
          </motion.ul>
        </Section>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
