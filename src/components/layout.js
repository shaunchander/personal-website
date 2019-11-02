/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container h-screen flex items-center px-6 overflow-y-hidden">
        <main>{children}</main>
      </div>
    </>
  )
}
export default Layout
