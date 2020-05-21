import React from "react"

import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
}

const ZoomIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  )
}

export default ZoomIn
