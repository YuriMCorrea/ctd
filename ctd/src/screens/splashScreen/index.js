import api from "../../services"

const axios = require('axios');

// Make a request for a user with a given ID
api.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
function deleteProduto (id){
    const response = api.delete(`/produto/${id}`)
    .then(function(response){
        alert(`${response}`);
    })
}

