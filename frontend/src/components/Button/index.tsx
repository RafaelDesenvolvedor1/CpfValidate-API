import React, { Children } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default (props: Props)=>{

    return(
        <button {...props} type="button">
            {props.children}
        </button>
    )
}