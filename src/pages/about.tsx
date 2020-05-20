import React from "react"

// Component imports
import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import Text from "../components/Text"
import { Link } from "gatsby"
import ZoomIn from "../components/ZoomIn"

const about = () => {
  return (
    <Layout>
      <SEO title="About me"></SEO>
      <Section className="sm:mt-0 sm:flex sm:flex-col sm:justify-center sm:h-full">
        <ZoomIn>
          <div className="lg:w-8/12 xl:w-1/2">
            <Text variant="h3">
              <span className="text-syncore">About me</span>.
            </Text>
            <p className="mt-6 mb-4 lg:text-lg">
              Hey, I’m Shaun! I’m a company owner, web developer, and premed
              student the University of Wisconsin-Madison. I’m an avid
              JavaScript developer with a passion for the JAMStack, I currently
              work with Gatsby.js, Next.js, GraphQL, Netlify, Vercel, Node.js,
              and lambda functions to build high performance websites!
            </p>
            <p className="mb-4 lg:text-lg">
              Syncore LLC is my web design firm, we are a five-membered team
              centered around building modern websites for startups and private
              clients using the bleeding edge technologies like Gatsby.js among
              others from the JAMStack.
            </p>
            <p className="lg:text-lg">
              <strong>
                That’s all I had to say, feel free to{" "}
                <Link to="/portfolio" className="text-syncore hover:underline">
                  check out my projects
                </Link>{" "}
                or{" "}
                <Link to="/contact" className="text-syncore hover:underline">
                  get in touch with me
                </Link>{" "}
                if you’d like to get a website made or just to talk 😄
              </strong>
            </p>
          </div>
        </ZoomIn>
      </Section>
    </Layout>
  )
}

export default about
