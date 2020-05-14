import React from "react"

interface Props {
  className?: string
  children: React.ReactNode
}

const Section = ({ className = "", children }: Props) => {
  return (
    <section className={`container mx-auto ${className}`}>{children}</section>
  )
}

export default Section
