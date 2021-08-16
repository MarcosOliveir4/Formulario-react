import { Container, Typography } from "@material-ui/core";
import "./App.css";
import { FormularioCadastro } from "./components/formularioCadastro";
import {validaCEP, validaCPF, validaSenha} from './models/cadastro'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={onSubmit} validacoes={{cpf: validaCPF, senha: validaSenha, cep: validaCEP}}/>
    </Container>
  );
}

function onSubmit(dados: any) {
  console.log(dados);
}

export default App;
