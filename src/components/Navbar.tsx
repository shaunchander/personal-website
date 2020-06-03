import React from "react"

// Component imports
import Section from "./Section"
import { motion, useCycle } from "framer-motion"
import NavLink from "./NavLink"

const Navbar = () => {
  const [open, toggleOpen] = useCycle(false, true)
  return (
    <motion.nav animate={open ? "open" : "closed"}>
      <Section className="relative z-10">
        <motion.button
          onClick={() => {
            toggleOpen()
          }}
          className="flex flex-col items-center justify-center select-none focus:outline-none active:outline-none"
        >
          <span className="sr-only">Menu</span>
          <motion.span
            className="block w-8 h-1 mb-2 bg-white"
            variants={{
              closed: { rotate: 0, y: 0, backgroundColor: `#2F323A` },
              open: { rotate: -45, y: 6, backgroundColor: `#ffffff` },
            }}
          >
            &nbsp;
          </motion.span>
          <motion.span
            className="block w-8 h-1 bg-white"
            variants={{
              closed: { rotate: 0, y: 0, backgroundColor: `#2F323A` },
              open: { rotate: 45, y: -6, backgroundColor: `#ffffff` },
            }}
          >
            &nbsp;
          </motion.span>
        </motion.button>
      </Section>
      <motion.div
        variants={{
          closed: {
            top: "-100vh",
            transition: {
              delay: 0.15,
              type: "tween",
              ease: [0.5, 0, 0.75, 0],
              duration: 0.75,
            },
          },
          open: {
            top: 0,
            transition: {
              type: "tween",
              ease: [0.25, 1, 0.5, 1],
              duration: 0.75,
            },
          },
        }}
        className="fixed inset-x-0 w-full h-full bg-syncore"
        style={{ top: "-100vh" }}
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
            <NavLink to="/" emoji="🏠" emojiLabel="house">
              Home
            </NavLink>
            <NavLink to="/about" emoji="🧑" emojiLabel="person">
              About
            </NavLink>
            <NavLink
              isATag
              to="https://github.com/shaunchander/personal-website/blob/master/temporary-portfolio.md"
              emoji="📂"
              emojiLabel="chart"
            >
              Portfolio
            </NavLink>
            <NavLink noMb to="/contact" emoji="💬" emojiLabel="speech bubble">
              Contact
            </NavLink>
          </motion.ul>
        </Section>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
