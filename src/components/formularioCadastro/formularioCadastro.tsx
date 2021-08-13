import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./dadosEntrega";
import DadosPessoais from "./dadosPessoais";
import DadosUsuario from "./dadosUsuario";
type Form = {
  aoEnviar: Function;
};

function FormularioCadastro({ aoEnviar }: Form) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" align="center" component="h2">Cadastro Finalizado!</Typography>
  ];
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados: any) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }
  return (
  <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>
  );
}

export default FormularioCadastro;
