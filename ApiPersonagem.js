function getPersonagem() {
    fetch("https://swapi.dev/api/people/?page=1")
        .then((response) => response.json())
        .then(responseJson => responseJson.results.map((character) => addCharacter(character))
        )
        .catch((error) => console.log(error));
}

getPersonagem();


function addCharacter(character) {
    const characterContent = `  
   
   <div class="infoContainer">
   <h3>Nome: ${character.name}</h3>
   <h3> Ano de Nascimento: ${character.birth_year}</h3>
   <h3>Genero: ${character.gender}</h3>
</div>
</div>
<div>
   <img class="paragrafo__imagem" src="https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g,"")}.jpg"
       alt=${character.name}>
</div>
`


const infoContainer = document.getElementsByClassName("infoContainer")[0];
infoContainer.insertAdjacentHTML("beforeend", characterContent);

}