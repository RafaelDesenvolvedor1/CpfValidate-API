import React, { useState } from "react";

type Props = {
    text: string,
    valid: boolean
}

export default ({text, valid}:Props) => {
    //const [valid, setValid] = useState<boolean | null>(true)
    return(
        <div className={`alert alert-${valid ? "success":"danger"} text-start text-uppercase mt-5`}>
            {text}
        </div>
    )
}