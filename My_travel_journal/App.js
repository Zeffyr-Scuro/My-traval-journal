import React from "react"
import Holiday from "./Holiday"
import data from "./data"
import Navbar from "./Navbar"

export default function App() {
    const items = data.map(item => <Holiday {...item}/>)
    return(
        <div className="app-display">
            <Navbar />
            {items}
        </div>
    )
}