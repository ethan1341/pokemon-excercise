import React from "react";

export const Tester = React.memo(()=>{
    console.log('tester')
    return (
        <h2>hello</h2>
    )
})