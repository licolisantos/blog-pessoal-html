/* ============================================
   MODAL DE CONTATO
   Controle de abertura, fechamento e envio
   ============================================ */

// Seleciona os elementos necessários do DOM
const botaoAbrir = document.querySelector(".abrir-modal");
const modal = document.getElementById("modalContato");
const botaoFechar = document.getElementById("fecharModal");
const formulario = document.getElementById("formContato");

/* ============================================
   Verificação de segurança
   Evita erros caso algum elemento não exista
   ============================================ */
if (botaoAbrir && modal && botaoFechar && formulario) {

  /* Abre o modal */
  botaoAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  /* Fecha o modal ao clicar no botão fechar */
  botaoFechar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  /* Fecha o modal ao clicar fora do conteúdo */
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  /* Envio do formulário */
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    /* Feedback simples para o usuário */
    alert("Mensagem enviada com sucesso");

    /* Fecha o modal e limpa os campos */
    modal.style.display = "none";
    formulario.reset();
  });

}