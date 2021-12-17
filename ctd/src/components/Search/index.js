


import React, { useState} from "react";
import api from "../../services";

const SearchById = () =>{
    const [produtos, setProdutos]= useState([]);
    const [produto, setProduto]= useState([]);
    const [search, setSearch]= useState('');
    
  
        
function getProductById (idProduto){
      api    
      .get(`/produto/${idProduto}`)
      .then((response)=> setProduto(response.data))
      .catch((err) => {
          console.error("Ops deu erro"+ err);
      });
    };

    return(
        <view>
            <TextInput
             type="search"
             placeholder="Buscar"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
            />            
            {produtos.map((produtos)=>(
                <CardProduto produtos={produtos}/>
            ))}
        </view>
    )
};