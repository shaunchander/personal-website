import React, { useState } from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import Clipboard from "react-clipboard.js"
import SEO from "../components/SEO"
import ZoomIn from "../components/ZoomIn"

const Contact = () => {
  const [copied, toggleCopy] = useState(false)
  return (
    <Layout>
      <SEO title="Contact me"></SEO>
      <Section className="flex flex-col justify-center h-full">
        <ZoomIn>
          <div className="md:w-8/12 xl:w-5/12">
            <Text variant="h3">
              <span className="text-syncore">Let's get in touch</span>.
            </Text>
            <Text className="mt-6">
              I’m always up for a good chat, you can find me on Discord over at{" "}
              <Clipboard
                data-clipboard-text="Athys#9347"
                onSuccess={() => {
                  toggleCopy(!copied)
                  setTimeout(() => {
                    toggleCopy(false)
                  }, 2000)
                }}
              >
                <button className="text-syncore hover:underline">
                  {copied ? "(copied)" : "Athys#9347"}
                </button>
              </Clipboard>{" "}
              or{" "}
              <a
                href="mailto:shaun@syn-core.com"
                className="text-syncore hover:underline"
              >
                contact me via email
              </a>
              .
            </Text>
          </div>
        </ZoomIn>
      </Section>
    </Layout>
  )
}

export default Contact
