import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProdutos() {

    document.title = `Adicionar Produtos` ;

    const navigate = useNavigate();
    const [newNome, setNewNome] = useState("");
    const [newPreco, setNewPreco] = useState("");

    

    const handleInsert = ()=>{
        let newProduto = {
            id:ListaProdutos.length + 1,
            nome:newNome,
            preco:newPreco
        }
        ListaProdutos.push(newProduto)
        alert("Produto adicionado com sucesso!")
    }
    
    return (
        <>
        <div>
            <label>Produto: </label>
            <input type="text" value={newNome} onChange = {(e)=>setNewNome(e.target.value)} placeholder="Coloque aqui o nome do produto"></input>
        </div>
        <div>
            <label>Preço: </label>
            <input type="text" value={newPreco} onChange = {(e)=>setNewPreco(e.target.value)} placeholder="Coloque aqui o preço"></input>
        </div>
        <div>
            <button onClick={()=> {
                handleInsert()
                navigate("/produtos")
                }}>ADICIONAR</button>
            <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
        </div>
        </>
    );
        
          
    
}    
    
