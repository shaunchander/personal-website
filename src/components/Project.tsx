import React from "react"

// Component imports
import Text from "./Text"
import { Link } from "gatsby"

interface Props {
  thumbnail: string
  name: string
  tenure: string
  position: string
}

const Project = ({ thumbnail, name, tenure, position }: Props) => {
  return (
    <div>
      <Link>
        <img src={thumbnail} alt={name} className="object-contain w-16 h-16" />
        <div className="mt-4">
          <Text className="mb-1 text-lg font-extrabold text-syncore">
            {name}
          </Text>
          <p>{tenure}</p>
          <p className="text-sm">{position}</p>
        </div>
      </Link>
    </div>
  )
}

export default Project
