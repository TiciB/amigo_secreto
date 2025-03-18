document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const drawButton = document.querySelector(".button-draw");
    const nameList = document.getElementById("listaAmigos");
    const result = document.getElementById("resultado");
    
    let names = [];
    
    function adicionarAmigo() {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Por favor, insira um nome.");
            return;
        }
        
        if (names.includes(name)) {
            alert("Esse nome já foi adicionado.");
            return;
        }
        
        names.push(name);
        atualizarListaAmigos();
        nameInput.value = "";
        nameInput.focus();
    }
    
    function sortearAmigo() {
        if (names.length === 0) {
            alert("A lista está vazia. Adicione nomes antes de sortear.");
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * names.length);
        result.textContent = `O amigo secreto é: ${names[randomIndex]}`;
    }
    
    function atualizarListaAmigos() {
        nameList.innerHTML = "";
        names.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    }
    
    addButton.addEventListener("click", adicionarAmigo);
    drawButton.addEventListener("click", sortearAmigo);
});