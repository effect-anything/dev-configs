import { FunctionComponent } from "react"

const a_a = 10

let x: { bar: number; [x: string]: any }

x = {
  bar: 123,
  baz: 2,
}

interface A {
  new (): FunctionComponent
}

export const Hello: FunctionComponent = () => {
  return <div>Hello</div>
}

console.log(<Hello />)
