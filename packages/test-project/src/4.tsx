import React from "react"
import type { FunctionComponent } from "react"

const a_a = 10

export let x: { bar: number; [x: string]: any }

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

interface IBreadcrumbResult {
  /**
   * 面包屑文字
   */
  text: string
  /**
   * 跳转地址
   */
  to?: string
}

interface IAnimal {
  name: string
}

interface IIguana {
  name: string
}

interface _IAnimal {
  name: string
}

console.log(<Hello />)
