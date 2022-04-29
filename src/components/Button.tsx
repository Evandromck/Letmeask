import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";

export function Button(){
    const [counter, setCounter] = useState(0) //variavel 

    function increment(){
        setCounter(counter + 1); //calculo 
        console.log(counter); //printf
    }

    return(
        <button onClick={increment}>  
            {counter}
        </button>
    )
}
