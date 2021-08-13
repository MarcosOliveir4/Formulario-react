import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
type Form = {
  aoEnviar: Function;
};
function DadosUsuario({ aoEnviar }: Form) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        variant="outlined"
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        variant="outlined"
        fullWidth
        margin="normal"
        label="Senha"
        type="password"
        required
      />
      <Button variant="outlined" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
