function validaCPF(cpf: string) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validaSenha(senha: string) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter 4 e 72 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validaCEP(cep: string) {
  if (cep.length !== 8) {
    return { valido: false, texto: "CEP deve ter 8 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}
export { validaCPF, validaSenha, validaCEP };
