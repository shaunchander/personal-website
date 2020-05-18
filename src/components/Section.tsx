import React from "react"

interface Props {
  className?: string
  children: React.ReactNode
}

const Section = ({ className = "", children }: Props) => {
  return (
    <section className={`container mx-auto p-6 ${className}`}>
      {children}
    </section>
  )
}

export default Section
