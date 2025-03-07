import React from "react";

function Contact(prop) {
    return (
        <div>
            <h1>{prop.title}</h1>
            <p>{prop.desc}</p>
        </div>
    )
}

export default Contact;