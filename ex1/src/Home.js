import React from "react";

function Home(prop) {
    return (
        <div>
            <h1>{prop.title}</h1>
            <p>{prop.desc}</p>
        </div>
    )
}

export default Home;