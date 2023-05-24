import { useState } from "react";

export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        // contador++;
        // console.log('aumentando')
        setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

    if(contador > 5) {
        return (
            <div>
                <h1>Valor muito alto!</h1>
                <button onClick={aumentar}>aumentar</button>
                <button onClick={diminuir}>diminuir</button>
            </div>   
        )      
    }

    return (
         <div>
            <h1>Meu Contador: {contador}</h1>
            {/* <h3>{contador}</h3>
            { contador > 9? <h1>Valor muito grande</h1> : null}
            { contador > 10? <button>Deletar</button> : null}
            { contador < 2? <h1>Valor muito pequeno</h1> : null}
            <button onClick={aumentar}>aumentar</button> */}
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )     
}
