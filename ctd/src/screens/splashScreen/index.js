import api from "../../services"

function deleteProduto (id){
    const response = api.delete(`/produto/${id}`)
    .then(function(response){
        alert(`${response}`);
    })
}