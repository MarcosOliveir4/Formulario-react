import { Button, Grid, TextField } from "@material-ui/core";
import { FocusEvent, useState } from "react";
import apiCep from "../../service/viaCep";
import CEP from "../../models/cep";
type Form = {
  aoEnviar: Function;
  validacoes: { [x: string]: Function };
};

type Erros = {
  [x: string]: { valido: boolean; texto: string };
};

function DadosEntrega({ aoEnviar, validacoes }: Form) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [erros, setErros] = useState<Erros>({
    cep: { valido: true, texto: "" },
  });

  async function getApi() {
    await apiCep
      .get(`${cep}/json`)
      .then((resp: any) => {
        const data: CEP = resp.data;
        if (data.localidade && data.uf && data.logradouro) {
          setCidade(data.localidade);
          setEstado(data.uf);
          setEndereco(data.logradouro);
        }
      })
      .catch((resp) => console.log(resp))
      .finally();
  }

  function validarCampos(
    event: FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
    if (novoEstado.cep.valido) {
      getApi();
    }
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
          aoEnviar({ cep, endereco, numero, estado, cidade, complemento });
        }
      }}
    >
      <Grid container alignContent="center" spacing={1}>
        <Grid item sm={12}>
          <TextField
            value={endereco}
            onChange={(event) => {
              setEndereco(event.target.value);
            }}
            id="endereco"
            label="Endereço"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Grid>

        <Grid item sm={6}>
          <TextField
            value={cep}
            onChange={(event) => {
              setCep(event.target.value.replace(/\D/g, ""));
            }}
            id="cep"
            name="cep"
            label="CEP"
            variant="outlined"
            margin="normal"
            type="text"
            fullWidth
            onBlur={(event) => validarCampos(event)}
            error={!erros.cep.valido}
            helperText={erros.cep.texto}
            required
          />
        </Grid>
        <Grid item sm={3}>
          <TextField
            value={numero}
            onChange={(event) => {
              setNumero(event.target.value.replace(/\D/g, ""));
            }}
            id="numero"
            label="Numero"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Grid>
        <Grid item sm={3}>
          <TextField
            value={complemento}
            onChange={(event) => {
              setComplemento(event.target.value);
            }}
            id="complemento"
            label="complemento"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item sm={3}>
          <TextField
            value={estado}
            onChange={(event) => {
              setEstado(event.target.value);
            }}
            id="estado"
            label="Estado"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Grid>
        <Grid item sm={9}>
          <TextField
            value={cidade}
            onChange={(event) => {
              setCidade(event.target.value);
            }}
            id="cidade"
            label="Cidade"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Grid>
        <Button variant="outlined" color="primary" type="submit" fullWidth>
          Finalizar Cadastro
        </Button>
      </Grid>
    </form>
  );
}

export default DadosEntrega;
