import React from "react"

// Component imports
import { Link } from "gatsby"

import { motion } from "framer-motion"

interface Props {
  to: string
  children: string
  noMb: boolean
}

const NavLink = ({ to, children, noMb }: Props) => {
  return (
    <motion.li
      className={noMb ? "" : "mb-4 lg:mb-8"}
      variants={{
        closed: { x: -10, opacity: 0 },
        open: { x: 0, opacity: 1 },
      }}
    >
      <Link
        to={to}
        className="transition-all duration-150 ease-out hover:text-syncoreLight"
        activeClassName="text-gunmetalDark hover:text-gunmetalDark"
      >
        {children}
      </Link>
    </motion.li>
  )
}

export default NavLink