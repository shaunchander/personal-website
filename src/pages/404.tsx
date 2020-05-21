import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import Button from "../components/Button"

import ZoomIn from "../components/ZoomIn"

const NotFound = () => {
  return (
    <Layout>
      <Section className="flex flex-col items-center justify-center h-full">
        <ZoomIn>
          <Text
            variant="h1"
            className="text-6xl font-extrabold text-center text-syncore"
          >
            404
          </Text>
          <Text className="mt-4 mb-8 text-lg font-medium text-center">
            Well that wasn't found...
          </Text>
          <Button url="/" variant="primary">
            Back to home
          </Button>
        </ZoomIn>
      </Section>
    </Layout>
  )
}

export default NotFound
