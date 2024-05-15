import { useState } from "react";

const Dados = () => {

    let mostreDados = 10;

    // 12 - Atribuindo novo valor 

    const [novoNumero, setNovoNumero] = useState(15);

    return (
        <div>
            <p>Valor: {mostreDados}</p>

            {/* Exibindo novo valor atribuido */}
            <p> Novo valor: {novoNumero}</p>

            {/* Exibindo um novo valor atravès de um evento de click */}
            <button onClick={() => setNovoNumero(20)}>Alterarando o valor após o click</button>
        </div>
    )
}

export default Dados;