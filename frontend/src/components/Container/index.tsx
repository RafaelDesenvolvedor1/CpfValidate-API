import React, { useState } from "react";

type Props = {
  children: React.ReactNode,
  validContainer: boolean
};

export default ({ children,validContainer }: Props) => {

  return (
    <div className={`myContainer container card p-5 rounded-5 position-relative animate__animated ${validContainer ? "animate__tada":"animate__shakeX"}`}>
      <h1 className="card-header text-white">Validação de CPF</h1>
      <div className="card-body mt-3 py-4">
        {children}
        </div>
    </div>
  );
};
