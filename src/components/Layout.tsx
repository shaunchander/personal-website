import React from "react"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <main className="font-jost text-gunmetalDark">{children}</main>
}

export default Layout
