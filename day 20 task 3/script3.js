fetch("cocktails.json")
    .then(function (response) {
        return response.json();

    })
    .then(function (cocktails) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let cocktail of cocktails) {
            out += `
                <tr>
                <td><img src='${cocktail.strDrinkThumb}'></td>
                <td>${cocktail.idDrink}</td>
                <td>${cocktail.strDrink}</td>
                <td>${cocktail.strCategory}</td>
                <td>${cocktail.strAlcoholic}</td>
                <td>${cocktail.strGlass}</td>
                <td>${cocktail.strIngredient1}</td>
                <td>${cocktail.strIngredient2}</td>
                <td>${cocktail.strIngredient3}</td>
                </tr>
             `;
        }
        placeholder.innerHTML = out;
    })