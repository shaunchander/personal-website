import React from "react"

// Component imports
import { Link } from "gatsby"

interface Props {
  children: string
  url: string
  variant: string
  className?: string
}

const Button = ({ children, url, variant, className = "" }: Props) => {
  if (variant === "primary") {
    return (
      <Link
        to={url}
        className={`flex items-center justify-center block w-48 h-12 font-black text-white bg-syncore ${className} hover:bg-syncoreLight transition-all duration-150 active:bg-syncoreDark ease-in`}
      >
        {children}
      </Link>
    )
  }
  if (variant === "secondary") {
    return (
      <Link
        to={url}
        className={`flex items-center justify-center block w-48 h-12 font-black text-white bg-gunmetal ${className} hover:bg-gunmetalLight transition-all duration-150 active:bg-gunmetalDark ease-in`}
      >
        {children}
      </Link>
    )
  }
}

export default Button
