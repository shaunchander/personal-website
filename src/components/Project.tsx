import React from "react"

// Component imports
import Text from "./Text"

interface Props {
  thumbnail: string
  name: string
  tenure: string
}

const Project = ({ thumbnail, name, tenure }: Props) => {
  return (
    <div>
      <img src={thumbnail} alt={name} className="object-contain h-32 mx-auto" />
      <div className="mt-4">
        <Text className="mb-1 text-lg font-extrabold text-syncore">{name}</Text>
        <Text>{tenure}</Text>
      </div>
    </div>
  )
}

export default Project
