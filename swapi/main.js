let btn = document.querySelector("button");
let body = document.querySelector("body");

function buttonpush() {
  //console.log("button clicked");
  axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then((response) => {
      console.log(response.data.results);
      let alderaanResidents = response.data.results[0].residents;
      for (let i = 0; i < alderaanResidents.length; i++) {
        let resident = alderaanResidents[i];
        axios.get(resident).then((response) => {
          let h2 = document.createElement("h2");
          h2.textContent = response.data.name;
          body.appendChild(h2);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", buttonpush);
