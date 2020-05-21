import React from "react"

// Component imports
import { Link } from "gatsby"

import { motion } from "framer-motion"

interface Props {
  to: string
  children: string
  noMb?: boolean
  emoji: any
  emojiLabel: string
}

const NavLink = ({ to, children, noMb, emoji, emojiLabel }: Props) => {
  return (
    <motion.li
      className={noMb ? "" : "mb-4 lg:mb-8"}
      variants={{
        closed: { y: 10, opacity: 0 },
        open: { y: 0, opacity: 1 },
      }}
    >
      <Link
        to={to}
        className="transition-all duration-150 ease-out hover:text-syncoreLight"
        activeClassName="text-gunmetalDark hover:text-gunmetalDark"
      >
        <motion.div whileHover="hover">
          <motion.span
            variants={{ hover: { x: 20 } }}
            role="img"
            aria-label={emojiLabel}
          >
            {emoji}
          </motion.span>{" "}
          {children}
        </motion.div>
      </Link>
    </motion.li>
  )
}

export default NavLink
