import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import Text from "../components/Text"

import { motion } from "framer-motion"

interface Props {}

const about = (props: Props) => {
  return (
    <Layout>
      <SEO title="About me"></SEO>
      <Section className="md:flex md:flex-col md:justify-center md:h-full">
        <motion.div
          className="lg:w-8/12 xl:w-1/2"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 100,
          }}
        >
          <Text variant="h3">
            <span className="text-syncore">About</span>.
          </Text>
          <p className="mt-6 mb-4 lg:text-lg">
            Hey, I’m Shaun! I’m a company owner, web developer, and student the
            University of Wisconsin-Madison. I’m an avid JavaScript developer
            with a passion for the JAMStack, I currently work with Gatsby.js,
            GraphQL, Netlify, Node.js, and the Serverless Stack to create high
            performance websites!
          </p>
          <p className="mb-4 lg:text-lg">
            Syncore LLC is my web design firm, we are currently a five-membered
            team consisiting of myself, a designer, and a junior developer -
            there we plan, design, test, and deploy websites built with
            Gatsby.js!
          </p>
          <p className="lg:text-lg">
            <strong>
              That’s all I had to say, feel free to check out my recent work or
              get in touch with me if you’d like to get a website made 😄
            </strong>
          </p>
        </motion.div>
      </Section>
    </Layout>
  )
}

export default about
