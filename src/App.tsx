import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioCadastro from "./components/formularioCadastro";

type cadastro = {
  nome: string;
  sobrenome: string;
  cpf: string;
  novidade: boolean;
  promocoes: boolean;
};

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={onSubmit} />
    </Container>
  );
}

function onSubmit(dados: cadastro) {
  console.log(dados);
}

export default App;
