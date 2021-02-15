import { useEffect, useState } from "react"

export const Hello = () => {
  const [count] = useState(1)

  useEffect(() => {
    console.log(count)
  }, [count])

  return <div>Hello</div>
}

console.log(<Hello />)
