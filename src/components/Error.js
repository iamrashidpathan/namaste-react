import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const error = useRouteError()
    return (
        <div>
            <h1>Ooops!</h1>
            <h2>Something went wrong!!😥</h2>
            <span>{error.data}</span>
        </div>
    )
}

export default Error