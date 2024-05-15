import React from 'react'

const EventoClick = () => {

    // 8 - Função com HandleClick

    const handleClick = () => {
        console.log('Handleclick executou!')
    }

    // 9 - Função de renderização

    const renderizando = (x) => {
        if (x) {
            return <h1>Renderizando X</h1>
        } else {
            return <h1>Renderizando Y</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log("teste clique")}>Clique Aqui!</button>
            </div>

            {/*Chamando Função com handleClick */}
            <div>
                <button onClick={handleClick}>Este botão tem uma função</button>
            </div>

            {/*Retornando a função com renderização */}
            <div>
                {renderizando(true)}
                {renderizando()}
            </div>

        </div>
    )
}

export default EventoClick;