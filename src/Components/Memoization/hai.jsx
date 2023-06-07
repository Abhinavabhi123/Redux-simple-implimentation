import React,{memo} from "react"

const Result =memo(({name,age})=>{
    console.log("hai this is the main component");
    return(
        <>
        <p>Name:{name} </p>
        <p>Age:{age} </p>
        </>
    )
})

export default Result