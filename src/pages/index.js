import React from "react"
import {Link} from "gatsby"
import Header from "../components/header/header"

export default function Home() {
  return (
    <div style={{color: `purple`}}>
      <Link to="contact">Contatct</Link>
      <Link to="about">About</Link>
      <Header headerText="Gatsby Developer!" />
      <p>Seja bem-vindo!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}