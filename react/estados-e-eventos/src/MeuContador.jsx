import { useState } from "react";

export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        // contador++;
        // console.log('aumentando')
        setContador(contador + 1);
    }

    return (
         <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>aumentar</button>
        </div>
    )     
}
