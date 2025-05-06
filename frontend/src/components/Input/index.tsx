import React, { useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default (props: Props) => {
    return(
        <input {...props} />
    )
}