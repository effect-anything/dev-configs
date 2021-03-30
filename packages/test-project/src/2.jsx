import { Component, useEffect, useState } from "react"

const a_a = 10

const b = {
  a: {
    d: 2,
  },
}

const f = b?.a.d ?? "string"

const getList = () => import("./4")

class TestComponent extends Component {
  state = {
    a: 100,
  }
}

export const Hello = () => {
  const [count] = useState(1)

  useEffect(() => {
    console.log(count)
  }, [count])

  return <div>Hello</div>
}

console.log(<Hello />)
