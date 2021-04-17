import React from "react"
import {Link} from "gatsby"
import Header from "../components/header/header"

export default function About() {
    return (
        <div style={{color: `teal`}}>
            <Link to="/">Home</Link>
            <Header headerText="About US" />
            <p>Sobre os desenvolvedores</p>
        </div>
    )
}