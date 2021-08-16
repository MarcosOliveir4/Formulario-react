import { Button, TextField } from "@material-ui/core";
import { FocusEvent, useState } from "react";
type Form = {
  aoEnviar: Function;
  validacoes: { [x: string]: Function };
};

type Erros = {
  [x: string]: { valido: boolean; texto: string };
};
function DadosUsuario({ aoEnviar, validacoes }: Form) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState<Erros>({
    senha: { valido: true, texto: "" },
  });

  function validarCampos(
    event: FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }
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
        onBlur={(event) => validarCampos(event)}
        name="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        variant="outlined"
        fullWidth
        margin="normal"
        label="Senha"
        type="password"
        required
      />
      <Button variant="outlined" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
