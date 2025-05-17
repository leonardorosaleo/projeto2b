const dadosSafra = {
  janeiro: ["Manga", "Melancia", "Abobrinha", "Tomate"],
  fevereiro: ["Uva", "Banana", "Pepino", "Cenoura"],
  marco: ["Abacaxi", "Batata-doce", "Couve", "Pimentão"],
  abril: ["Maracujá", "Maçã", "Repolho", "Alface"],
  maio: ["Laranja", "Abóbora", "Beterraba", "Brócolis"],
  junho: ["Tangerina", "Batata", "Couve-flor", "Chuchu"],
  julho: ["Morango", "Cebola", "Espinafre", "Alho-poró"],
  agosto: ["Pera", "Nabo", "Almeirão", "Ervilha"],
  setembro: ["Mamão", "Rúcula", "Milho verde", "Jiló"],
  outubro: ["Caju", "Quiabo", "Inhame", "Alface"],
  novembro: ["Melão", "Cenoura", "Tomate", "Beterraba"],
  dezembro: ["Pêssego", "Abobrinha", "Repolho", "Almeirão"]
};

function mostrarSafra() {
  const mes = document.getElementById("mes").value;
  const resultado = document.getElementById("resultado");

  if (mes && dadosSafra[mes]) {
    const lista = dadosSafra[mes].map(item => `<li>${item}</li>`).join("");
    resultado.innerHTML = `<h2>Produtos em safra em ${mes.charAt(0).toUpperCase() + mes.slice(1)}:</h2><ul>${lista}</ul>`;
  } else {
    resultado.innerHTML = "<p>Selecione um mês para ver os produtos da safra.</p>";
  }
}