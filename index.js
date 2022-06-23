// variáveis que acessam cada "div" com sua respectiva imagem de lâmpada
const acesa = document.querySelector("#lampada_acesa");
const apagada = document.querySelector("#lampada_apagada");

// funções para cada tipo de ação
const ligarLampada = () => {
  acesa.style.display = "flex";
  apagada.style.display = "none";
};

const desligarLampada = () => {
  acesa.style.display = "none";
  apagada.style.display = "flex";
};
