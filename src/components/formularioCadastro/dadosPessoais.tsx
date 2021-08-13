import { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

type Form = {
  aoEnviar: Function;
};

function DadosPessoais({ aoEnviar }: Form) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocaos, setPromocaos] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, novidades, promocaos });
      }}
    >
      <TextField
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <TextField
        value={sobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />
      <TextField
        value={cpf}
        id="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        label="CPF"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validaCPF(event.target.value);
          setErros(ehValido);
        }}
      />

      <FormControlLabel
        control={
          <Switch
            name="promocoes"
            checked={promocaos}
            color="primary"
            onChange={(event) => {
              setPromocaos(event.target.checked);
            }}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            name="novidades"
            checked={novidades}
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
        label="Novidades"
      />

      <Button variant="outlined" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
function validaCPF(cpf: string) {
  if (cpf.length !== 11) {
    return { cpf: { valido: false, texto: "CPF deve ter 11 digitos" } };
  } else if (cpf.length < 11) {
    return { cpf: { valido: false, texto: "CPF deve ter 11 digitos" } };
  } else {
    return { cpf: { valido: true, texto: "" } };
  }
}

export default DadosPessoais;
