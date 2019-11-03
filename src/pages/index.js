import React, { useRef, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [discord, setDiscord] = useState("Athys#9347")

  const discordTag = useRef(null)

  const handleDiscordClick = () => {
    if (!window.navigator) {
      return
    }
    navigator.clipboard.writeText(discord)
    setDiscord("(copied)")
    setTimeout(() => {
      setDiscord("Athys#9347")
    }, 1500)
  }

  return (
    <Layout>
      <SEO title="" />

      <div className="z-10">
        <h1 className="text-4xl font-bold mb-8 lg:text-6xl">
          <span role="img" aria-label="waving hand emoji">
            👋
          </span>
          , Hey there!
        </h1>
        <p className="mb-5 lg:text-lg lg:mb-8">
          Don’t worry, you’ve reached the right place, I’m currently
          re-designing and updating my portfolio website{" "}
          <span role="img" aria-label="sweat smile emoji">
            😅
          </span>
        </p>
        <p className="mb-5 lg:text-lg lg:mb-8">
          You can{" "}
          <a href="#" target="_blank" rel="noopener">
            view my temporary portfolio on GitHub
          </a>{" "}
          or go to{" "}
          <a href="#" target="_blank" rel="noopener">
            my old portfolio website
          </a>{" "}
          (
          <span role="img" aria-label="hazard sign emoji">
            ⚠️
          </span>{" "}
          be warned that this is not up to date).
        </p>

        <p className="mb-5 lg:text-lg lg:mb-8">
          Need to contact me? Find me on Discord at{" "}
          <strong
            onClick={handleDiscordClick}
            className="cursor-pointer hover:text-syncore transition-color transition-ease transition-250"
            ref={discordTag}
          >
            {discord}
          </strong>{" "}
          or <a href="mailto:shaunchander@gmail.com">email me</a>.
        </p>

        <p className="text-sm">
          Psst... you can{" "}
          <a href="#" target="_blank" rel="noopener">
            view this website’s source code
          </a>{" "}
          if you’d like to!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
