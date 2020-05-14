import React from "react"

interface Props {
  variant?: string
  className?: string
  children: string | React.ReactElement
}

const Text = ({ variant = "p", className = "", children }: Props) => {
  if (variant === "h1") {
    return <h1 className={`${className}`}>{children}</h1>
  }

  if (variant === "h2") {
    return <h2 className={`${className}`}>{children}</h2>
  }

  if (variant === "h3") {
    return <h3 className={`${className}`}>{children}</h3>
  }

  if (variant === "h4") {
    return <h4 className={`${className}`}>{children}</h4>
  }

  if (variant === "h5") {
    return <h5 className={`${className}`}>{children}</h5>
  }

  if (variant === "h6") {
    return <h6 className={`${className}`}>{children}</h6>
  }

  return <p className={`${className}`}>{children}</p>
}

export default Text
