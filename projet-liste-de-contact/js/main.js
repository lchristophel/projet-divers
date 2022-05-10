let request = $.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  dataType: "json",
});
request.done(function (response) {
  let html = "";
  response.map((carte) => {
    html += 
    `<div class="card text-center">
        <div class="card-header">
          Liste
        </div>
        <div class="card-body">
          <h5 class="card-title">${carte.username}</h5>
          <p class="card-text">${carte.name}</p>
          <p class="card-text">${carte.address.street} ${carte.address.suite} <br/> 
          ${carte.address.city} ${carte.address.zipcode} - https://www.google.com/maps/place/${carte.address.geo.lat}${carte.address.geo.lng}</p>
          <p class="card-text">${carte.email}</p>
          <a href="#" class="btn btn-primary btn-c">${carte.phone}</a><a href="#" class="btn btn-primary btn-c">${carte.website}</a>
        </div>
        <div class="card-footer text-muted">
        </div>
      </div>`;
  });
  $(".cartes").html(html);
});

request.fail(function (http_error) {
  //Code à jouer en cas d'exécution en erreur du script du PHP

  let server_msg = http_error.responseText;

  let code = http_error.status;

  let code_label = http_error.statusText;

  console.log("Erreur " + code + " (" + code_label + ") : " + server_msg);
});
