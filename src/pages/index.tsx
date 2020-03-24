import React, { ReactElement } from "react"

function Index({}): ReactElement {
  return (
    <main className="container px-6 mx-auto leading-relaxed font-body">
      {/* Hero */}
      <section className="flex flex-col justify-center h-screen">
        <h1 className="text-5xl font-bold">
          I'm <span>Shaun</span>.
        </h1>
        <p className="mt-6">
          Developer, business owner, also a premed student...
        </p>
        <button className="flex items-center justify-center w-64 h-16 mt-12 text-sm font-bold bg-green-500">
          Check me out
        </button>
      </section>

      {/* About  */}
      <section>
        <h2 className="mb-8 text-4xl font-bold">What am I about?</h2>
        <p className="mb-4">
          A lot of things really, I’m currently a premed student at UW-Madison
          where I study biochemistry and neurobiology. I also freelance as a
          React.js web developer. Syncore LLC is my web design firm where I
          build modern websites for B2B/B2C clients using the JAMStack +
          TailwindCSS.
        </p>
        <p className="mb-4">
          When I’m not cramming for tests or stressing out over project
          deadlines, you can find me either binge-watching hours of YouTube or
          further understanding the whole serverless eco-system.
        </p>
        <p>
          I work with the following languages, libraries, and concepts:{" "}
          <span>
            HTML5, CSS3, JavaScript (ES6+), React.js, node.js, Gatsby.js,
            Next.js, serverless functions, Netlify, GraphQL, TailwindCSS,
            TypeScript, Markdown,
          </span>{" "}
          and of course, <span>the JAMStack</span>
        </p>
      </section>
    </main>
  )
}

export default Index
