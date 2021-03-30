import type { FunctionComponent } from "react"

const a_a = 10

let x: { bar: number; [x: string]: any }

x = {
  bar: 123,
  baz: 2,
}

const empty: number | null = null

const emptyValue = empty!

console.log(emptyValue)

interface A {
  new (): FunctionComponent
}

export const Hello = () => {
  return <div>Hello</div>
}

console.log(<Hello />)
