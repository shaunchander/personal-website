import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import SEO from "../components/SEO"
import Button from "../components/Button"

import { motion } from "framer-motion"

// Static assets
import Background from "../images/background.svg"
import ZoomIn from "../components/ZoomIn"

const index = () => {
  return (
    <Layout>
      <SEO
        description="Hey I'm Shaun Chander! I'm a web developer, company owner, and pre-med student. Check out my website to see my bio, portfolio, and contact information!"
        title="Homepage"
      />
      <Section className="flex flex-col items-center justify-center h-full md:items-start">
        <ZoomIn>
          <Text
            variant="h1"
            className="flex items-center justify-center mb-4 text-4xl font-bold md:justify-start md:text-6xl"
          >
            <motion.div
              animate={{
                x: [0, -3, 3, 0, 0],
                y: [0, 3, -3, 0, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </motion.div>
            <span>
              , I'm <span className="text-syncore">Shaun</span>
            </span>
          </Text>
          <Text
            variant="h2"
            className="text-xl font-medium text-center md:text-left"
          >
            Director at{" "}
            <a
              href="https://syn-core.com"
              className="text-syncore hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syncore
            </a>
            , web developer, and student.
          </Text>
          <div className="flex flex-col items-center mt-6 md:mt-8 md:items-start md:flex-row">
            <Button
              url="/contact"
              variant="primary"
              className="mb-4 md:mb-0 md:mr-4"
            >
              Get In Touch
            </Button>

            <Button url="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </ZoomIn>
        <div className="hidden overflow-hidden lg:block">
          <motion.img
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 100 }}
            className="lg:absolute lg:inset-y-0 lg:right-0 lg:h-screen"
            src={Background}
            alt=""
          />
        </div>
      </Section>
    </Layout>
  )
}

export default index
