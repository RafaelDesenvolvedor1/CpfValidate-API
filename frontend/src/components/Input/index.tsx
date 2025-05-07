import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default (props: Props) => {
    return(
        <input {...props} className="form-control"/>
    )
}