import React from "react";

import Input from "../Input";
import Button from "../Button";

import { useState } from "react";
import Container from "../Container";

export default () => {
  const [numCpf, setNumCpf] = useState("");

  return (
    <Container>
      <div>
        <Input value={numCpf} onChange={(e) => setNumCpf(e.target.value)} />
        <Button onClick={() => alert(numCpf)}>teste</Button>
      </div>
    </Container>
  );
};
