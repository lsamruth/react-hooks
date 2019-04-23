import React, {useRef, useEffect} from "react";


const UseRefDemo = () =>{
    let myRef = useRef(null);
    useEffect(()=>{
        myRef.current.focus();
    });
    return(
        <input ref={myRef} value="hello"/>
    )
};

export default UseRefDemo;
