const botao = document.getElementById("calcular");

botao.addEventListener("click", () => {
  const anoDigitado = parseInt(document.getElementById("anoNascimento").value);
  const anoAtual = 2025;

  if (isNaN(anoDigitado) || anoDigitado > anoAtual || anoDigitado < 1900) {
    document.getElementById("resultado").innerText =
      "Por favor, insira um ano válido.";
    return;
  }

  const idade = anoAtual - anoDigitado;
  document.getElementById(
    "resultado"
  ).innerText = `Sua idade em ${anoAtual} será aproximadamente: ${idade} anos.`;
});
