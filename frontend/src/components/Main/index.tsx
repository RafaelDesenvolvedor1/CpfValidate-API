import { useContext } from "react";

import Input from "../Input";
import Button from "../Button";

import { useState } from "react";
import Container from "../Container";

import { AuthContext } from "../../contexts/auth";

export default () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Erro");
  }
  const { getCpfValid } = context;

  const [numCpf, setNumCpf] = useState("");

  async function handleGetCpfValid() {
    alert(await getCpfValid(parseInt(numCpf)));
  }

  return (
    <Container>
      <div>
        <Input value={numCpf} onChange={(e) => setNumCpf(e.target.value)} />
        <Button onClick={handleGetCpfValid}>teste</Button>
      </div>
    </Container>
  );
};
