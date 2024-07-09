document.getElementById("cv").addEventListener("change", function () {
  const file = this.files[0];
  const maxSize = 5 * 1024 * 1024; //5mb tamanho limite do arquivo

  if (file.size > maxSize) {
    alert("Arquivo excedeu o limite de 5MB.");
    this.value = "";
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  //armazenar os dados preenchidos do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var vaga = document.getElementById("vaga").value;
  var cv = document.getElementById("cv").files[0]; //arquivo curriculo

  //construir objeto JSON com os dados do formulário
  var formData = {
    nome,
    email,
    telefone,
    vaga,
    cv,
  };

  console.log(formData);

  // Enviar o formData para o backend
  // Subistituir "https://example.com/submit-form" pelo endpoint do backend
  fetch("https://example.com/submit-form", {
    method: "POST",
    body: formData, // Enviar objeto com os dados do formulário
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na rede, resposta não foi bem sucedida.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Sucesso:", data); // resposta bem sucedida
      alert("Seus dados foram enviados!");
      // Resetar os campos do formulário
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Erro:", error); // Erro
      alert("Algo deu errado, tente novamente.");
    });
});
