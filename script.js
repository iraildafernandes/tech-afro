let stacks = [
  {
    title: "HTML",
    image: "./assets/icons/html.png"
  },
  {
    title: "CSS",
    image: "./assets/icons/css.png"
  },
  {
    title: "JavaScript",
    image: "./assets/icons/js.png"
  },
  {
    title: "React JS",
    image: "./assets/icons/react.png"
  }
];

let areaCardsStacks = document.querySelector(".area-cards");

for(let i = 0; i <= stacks.length; i++ ) {
  areaCardsStacks.innerHTML += `
    <div class="stack-card">
      <img src="${stacks[i].image}" alt="${stacks[i].title}" title="${stacks[i].title}" />
    </div>
  `;
}


// Formulario

let buttonForm = document.querySelector("button");

buttonForm.addEventListener("click", e => {
  e.preventDefault();

  let nome = document.querySelector("input[type = text]");
  let email = document.querySelector("input[type = email]");
  let textarea = document.querySelector("textarea");
  
  if(nome.value == "" || email.value == "" || textarea.value == ""){
    alert('Por favor, preencha todos os campos!');
    return;
  
  } else {
    alert('Obrigado por entrar em contato!');
    nome.value = "";
    email.value = "";
    textarea.value = "";
  } 
});