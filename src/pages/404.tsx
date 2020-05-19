import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import Button from "../components/Button"

import { motion } from "framer-motion"

const NotFound = () => {
  return (
    <Layout>
      <Section className="flex flex-col items-center justify-center h-full">
        <Text variant="h1" className="text-6xl font-extrabold text-syncore">
          404
        </Text>
        <Text className="mt-4 mb-8 text-lg font-medium">
          Well that wasn't found...
        </Text>
        <Button url="/" variant="primary">
          Back to home
        </Button>
      </Section>
    </Layout>
  )
}

export default NotFound
