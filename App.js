import React from "react"
import  ReactDOM  from "react-dom/client"

const elem = <span>React Element</span>

// REACT Elememt
const Title =()=> <h1 className="head"> {elem} Namaste React from JSX 🚀</h1>

// REACT Functional Component

const HeadingComponent = ()=>{
    return (
        // <React.Fragment></React.Fragment>
        <>
            <div id="container">
                <Title/>
                <h1>Namaste React Functional Component</h1>
            </div>
            <div id="container2">
                Container 2
            </div>
        </>
    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>) 