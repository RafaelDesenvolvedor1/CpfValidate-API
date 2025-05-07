import { useContext } from "react";

import Input from "../Input";
import Button from "../Button";

import { useState } from "react";
import Container from "../Container";

import { AuthContext } from "../../contexts/auth";
import Tooltip from "../Tooltip";

export default () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Erro");
  }
  const { getCpfValid } = context;

  const [numCpf, setNumCpf] = useState("");
  const [cpfValid, setCpfValid] = useState<boolean | null>(false);

  async function handleGetCpfValid(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let c = await getCpfValid(parseInt(numCpf));
    setCpfValid(!!c);
    //setNumCpf('')
  }

  return (
    <Container validContainer={!!cpfValid}>
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => handleGetCpfValid(e)}
        noValidate
      >
        <div className="input-group">
          <Input
            value={numCpf}
            onChange={(e) => setNumCpf(e.target.value)}
            autoFocus
            required
            placeholder="Não use pontos ou traços"
          />
          <Button>Validar</Button>
        </div>

        <Tooltip
          valid={!!cpfValid}
          text={`Cpf ${cpfValid ? "Valido" : "invalido"}`}
        />
      </form>
    </Container>
  );
};
