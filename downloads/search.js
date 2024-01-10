document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");
    const resultDiv = document.querySelector(".result");
    const appItems = document.querySelectorAll(".app-item");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Limpe os resultados anteriores
        searchResults.innerHTML = "";

        // Verifique cada elemento com a classe "app-item"
        appItems.forEach(function (appItem) {
            const appNameElement = appItem.querySelector(".app-name");
            const appName = appNameElement.textContent.trim().toLowerCase();

            // Se o termo de pesquisa estiver contido no nome do aplicativo
            if (appName.includes(searchTerm)) {
                // Clone o elemento completo com a classe "app-link"
                const appLinkElement = appItem.querySelector(".app-link").cloneNode(true);

                // Clone o elemento com a classe "app-image"
                const appImageElement = appItem.querySelector(".app-image");

                // Crie um container para os resultados da pesquisa
                const searchResultContainer = document.createElement("div");
                searchResultContainer.classList.add("search-result"); // Adicione a classe search-result

                // Adicione a imagem ao container
                searchResultContainer.appendChild(appImageElement.cloneNode(true));

                // Adicione o link ao container
                searchResultContainer.appendChild(appLinkElement);

                // Adicione o container à lista de resultados
                searchResults.appendChild(searchResultContainer);
            }
        });

        // Exiba a div de resultados apenas se houver resultados
        if (searchResults.children.length > 0) {
            resultDiv.style.display = "block";
        } else {
            // Se não houver resultados, oculte a div de resultados
            resultDiv.style.display = "none";
        }
    });
});
