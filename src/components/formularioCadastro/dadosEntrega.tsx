import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
type Form = {
  aoEnviar: Function;
};
function DadosEntrega({ aoEnviar }: Form) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <Grid container alignContent="center"  spacing={1}>
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

        <Grid item sm={6} >
          <TextField
            value={cep}
            onChange={(event) => {
              setCep(event.target.value);
            }}
            id="cep"
            label="CEP"
            type="number"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            value={numero}
            onChange={(event) => {
              setNumero(event.target.value);
            }}
            id="numero"
            label="Numero"
            type="number"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Grid>
        <Grid item sm={6}>
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
        <Grid item sm={6}>
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
