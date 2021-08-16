import { FocusEvent, useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

type Form = {
  aoEnviar: Function;
  validacoes: { [x: string]: Function };
};

type Erros = {
  [x: string]: { valido: boolean; texto: string };
};

function DadosPessoais({ aoEnviar, validacoes }: Form) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocaos, setPromocaos] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState<Erros>({
    cpf: { valido: true, texto: "" },
  });

  function validarCampos(
    event: FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar(): boolean {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocaos });
        }
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
        name="cpf"
        margin="normal"
        onChange={(event) => {
          setCpf(event.target.value.replace(/\D/g, ""));
        }}
        onBlur={(event) => validarCampos(event)}
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
