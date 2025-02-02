let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container .container-image .image");
let myFamilyButton = document.querySelector("#my-family");
let friendFamilyButton = document.querySelector("#friend-family");
let familySelection = document.querySelector(".family-selection");

let selectedFamily = "Júlia"; // Família padrão é a Júlia

// Evento de clique para selecionar a família
myFamilyButton.onclick = () => {
    selectedFamily = "Júlia"; // Seleciona a família da Júlia
    filterImages();
};

friendFamilyButton.onclick = () => {
    selectedFamily = "Pedro"; // Seleciona a família do Pedro
    filterImages();
};

// Evento de pesquisa
searchBox.oninput = () => {
    filterImages();

    // Exibe os botões apenas quando o usuário começar a digitar
    if (searchBox.value.trim() !== "") {
        familySelection.style.display = "block"; // Exibe os botões de seleção de família
    } else {
        familySelection.style.display = "none"; // Esconde os botões se a pesquisa estiver vazia
    }
};

function filterImages() {
    let value = searchBox.value.toLowerCase(); // Pega o valor da pesquisa
    images.forEach(image => {
        let title = image.getAttribute("data-title").toLowerCase();
        let family = image.getAttribute("data-family");

        // Se a pesquisa estiver vazia, mostramos todas as imagens de todas as famílias
        if (value === "") {
            image.style.display = "block"; // Mostra todas as imagens
        } else {
            // Caso contrário, filtramos pela pesquisa e pela família selecionada
            if (family === selectedFamily && title.includes(value)) {
                image.style.display = "block"; // Exibe a imagem que corresponde à pesquisa e à família
            } else if (title.includes(value)) {
                image.style.display = "block"; // Exibe a imagem correspondente ao título, independentemente da família
            } else {
                image.style.display = "none"; // Esconde as imagens que não correspondem
            }
        }
    });
}
