import { useEffect, useState } from "react"

const useOnLineStatus=()=>{
    const [isOnline, setIsOnline] = useState(true)
    useEffect(()=>{
        window.addEventListener("online", (event)=>{
            setIsOnline(true)
        })
        window.addEventListener("offline", (event)=>{
            setIsOnline(false)
        })
    },[])
    return isOnline
}

export default useOnLineStatus