import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import Text from "../components/Text"
import SEO from "../components/SEO"
import Project from "../components/Project"

// Static assets
import SyncoreLogo from "../images/syncore_logo.svg"
import DeepHelpLogo from "../images/deephelp_logo.svg"

const projects = () => {
  return (
    <Layout>
      <SEO title="My projects"></SEO>
      <Section>
        <div>
          <Text variant="h3">
            <span className="text-syncore">Projects</span>.
          </Text>
          <Text className="mt-6">
            A collection of my previous, on-going, and upcoming projects!
          </Text>
        </div>
        <div className="grid gap-8 mt-8 md:grid-cols-3 lg:mt-12">
          <Project
            name="Syncore LLC"
            tenure="Jan. 2019 - Current"
            thumbnail={SyncoreLogo}
          ></Project>
          <Project
            name="DeepHelp"
            tenure="Jan. 2019 - Jul. 2019"
            thumbnail={DeepHelpLogo}
          ></Project>
        </div>
      </Section>
    </Layout>
  )
}

export default projects
