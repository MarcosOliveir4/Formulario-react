import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./dadosEntrega";
import DadosPessoais from "./dadosPessoais";
import DadosUsuario from "./dadosUsuario";
type Form = {
  aoEnviar: Function;
  validacoes: { [x: string]: Function };
};

function FormularioCadastro({ aoEnviar, validacoes }: Form) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
    <Typography variant="h5" align="center" component="h2">
      Cadastro Finalizado!
    </Typography>,
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
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
