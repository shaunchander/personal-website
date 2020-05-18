import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import SEO from "../components/SEO"
import Button from "../components/Button"

const index = () => {
  return (
    <Layout>
      <SEO />
      <Section className="flex flex-col items-center justify-center h-screen">
        <Text variant="h1" className="mb-4 text-4xl font-bold">
          👋, I'm <span>Shaun</span>
        </Text>
        <Text variant="h2" className="text-xl font-medium text-center">
          Director at{" "}
          <a
            href="https://syn-core.com"
            className="text-syncore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Syncore
          </a>
          , web developer, and student.
        </Text>
        <div className="grid gap-4 mt-6">
          <Button variant="primary">Get In Touch</Button>
          <Button variant="secondary">Get In Touch</Button>
        </div>
      </Section>
    </Layout>
  )
}

export default index
