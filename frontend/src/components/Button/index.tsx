import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default (props: Props)=>{

    return(
        <button {...props} className="btn btn-secondary">
            {props.children}
        </button>
    )
}