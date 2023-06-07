import React,{useMemo}  from "react";

const Result =({data})=>{
    const hai = useMemo(()=>{
        console.log("hello");
        return data.map((item)=>item*2)

    })
    return(
        <>
        {hai}
        </>
    )

}

export default Result