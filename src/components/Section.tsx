import React from "react"

interface Props {
  className?: string
  children: React.ReactElement
}

const Section = ({ className, children }: Props) => {
  return (
    <section
      className={`container mx-auto ${className !== undefined && className}`}
    >
      {children}
    </section>
  )
}

export default Section
