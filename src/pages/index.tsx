import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import SEO from "../components/SEO"
import Button from "../components/Button"

import { motion } from "framer-motion"

const index = () => {
  return (
    <Layout>
      <SEO
        description="Hey I'm Shaun Chander! I'm a web developer, company owner, and pre-med student. Check out my website to see my bio, portfolio, and contact information!"
        title="Homepage"
      />
      <Section className="flex flex-col items-center justify-center h-screen md:items-start">
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 100 }}
        >
          <Text
            variant="h1"
            className="flex items-center mb-4 text-4xl font-bold md:text-6xl"
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
              <span>👋</span>
            </motion.div>
            <span>
              , I'm <span className="text-syncore">Shaun</span>
            </span>
          </Text>
          <Text variant="h2" className="text-xl font-medium text-center">
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
          <div className="grid gap-4 mt-6 md:grid-cols-2 md:gap-6 md:mt-8">
            <Button variant="primary">Get In Touch</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </motion.div>
      </Section>
    </Layout>
  )
}

export default index
