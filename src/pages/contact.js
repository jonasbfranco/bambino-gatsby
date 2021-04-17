import React from "react"
import {Link} from "gatsby"
import Header from "../components/header/header"

export default function Contact() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Header headerText="Contact Us" />
            <p>Fale conosco</p>
        </div>
    )
}