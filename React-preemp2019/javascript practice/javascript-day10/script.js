const listMovies = document.getElementById("listaFilme");

fetch("https://swapi.co/api/films/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.results.forEach(item => {
      let location = window.location.pathname;
      if (location.endsWith("index.html")) {
        console.log("loc");
        let a = document.createElement("a");
        let id = item.episode_id;
        a.setAttribute("href", "details.html/" + id);
        a.setAttribute("value", `${id}`);
        a.innerText = item.title;
        // add click events for every link
        a.addEventListener("click", e => showDetails(e));
        let li = document.createElement("li");
        li.appendChild(a);
        listMovies.appendChild(li);
        // console.log(window.location.pathname);

        console.log(item.title, item.episode_id, item.release_date);
      }
    });
  });
/*
const showDetails = event => {
  let target = event.target;
  let id = target.getAttribute("value");
  window.location.replace("./details.html");

  console.log("showDetails", event);
  fetch("https://swapi.co/api/films/")
    .then(function(response) {
      console.log(">>>", response.json());
      return response.json();
    })
    .then(function(myJson) {
      myJson.results.forEach(item => {
        console.log(item.title, item.episode_id, item.release_date);
        console.log("sdd");
      });
    });
};
*/
