import React from "react"

interface Props {
  children: React.ReactElement
}

const Layout = ({ children }: Props) => {
  return <main>{children}</main>
}

export default Layout
