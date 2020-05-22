import React from "react"

// Component imports
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { motion } from "framer-motion"

interface Props {
  to: string
  children: string
  noMb?: boolean
  emoji: any
  emojiLabel: string
  isATag?: boolean
}

const NavLink = ({ to, children, noMb, emoji, emojiLabel, isATag }: Props) => {
  const URL = ({ emoji, emojiLabel, children }: Props) => (
    <div>
      <span role="img" aria-label={emojiLabel}>
        {emoji}
      </span>{" "}
      {children}
    </div>
  )

  return (
    <motion.li
      className={noMb ? "" : "mb-4 lg:mb-8"}
      variants={{
        closed: { y: 35, opacity: 0 },
        open: { y: 0, opacity: 1 },
      }}
    >
      {isATag ? (
        <OutboundLink
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-150 ease-out hover:text-syncoreLight"
        >
          <URL emoji={emoji} emojiLabel={emojiLabel}>
            {children}
          </URL>
        </OutboundLink>
      ) : (
        <Link
          to={to}
          className="transition-all duration-150 ease-out hover:text-syncoreLight"
          activeClassName="text-gunmetalDark hover:text-gunmetalDark"
        >
          <URL emoji={emoji} emojiLabel={emojiLabel}>
            {children}
          </URL>
        </Link>
      )}
    </motion.li>
  )
}

export default NavLink
