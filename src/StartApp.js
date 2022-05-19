import React, { useState } from 'react';
import './StartApp.css';

function StartApp () {
    const [num, setNum] = useState("")
    const [num2, setNum2] = useState("")
    const [dato ,setDato ]= useState("")
    const [resulta, setResult ] = useState(0)
    const [bandera , setBandera ] = useState(true)

    function changeNumber (index){
        if(dato === ""){

            setNum(num + index);
            setBandera(true)


        }
        else{
            setNum2(num2 + index);
            setBandera(false)

        
        }

    }

   function changeSimbolo (index){
        setDato(index)
    } 

    function result (){
        switch(dato){
            case "+":
                setResult(restDatos(Number(num)+ Number(num2)));
                break
            case "-":
                setResult(restDatos(Number(num)- Number(num2)))
               
                break

            case "*":
                setResult(restDatos(Number(num)* Number(num2)))
                break
            
            case "/":
                setResult(restDatos(Number(num)/ Number(num2)))
                break;
            case "mod":
                setResult(Number(num) % Number(num2))
                
    
               
        }
    }
    
    function limpiar() {
        setNum ("");
        setNum2 ("");
        setDato ("");
        setResult("");
        
    }
    

    function restDatos (valor){
        valor = valor.toString()
        if(Number(valor) > 999999999){
            return "error";

        }
        if (valor.length > 9){
            valor = valor.substring(0,9)

        }
        return valor   

    }
    
    function evaluar (){
        if(bandera){
            
            setNum(Number(num)*-1)
            
        }
        
        else{
            setNum2(Number(num2)*-1)

        }


    }
    return (
        <div className='Calculator'>
            <h1 className='titulo'>Calculator</h1>
            <div className='grid-calc'>
                <div className='muestra-datos'>
                    <div className='entrada-datos'>{dato ?num + dato: ""}</div>
                    <div className='salida-datos'>{ resulta  ? restDatos(resulta):(!dato ?num : num2)}</div>
                </div>
                <button onClick={limpiar} className='button-grande'>CLEAR</button>
                <button onClick={() => {changeSimbolo("mod")}} >mod</button>
                <button onClick={()=> {changeSimbolo("/")}} >/</button>
                <button onClick={evaluar} >+/-</button>
                <button onClick={() => {changeNumber(7)}} >7</button>
                <button onClick={() => {changeNumber(8)}} >8</button>
                <button onClick={() => {changeNumber(9)}} >9</button>
                <button onClick={() => {changeSimbolo("*")}} >*</button>
                <button onClick={() => {changeNumber(4)}} >4</button>
                <button onClick={() => {changeNumber(5)}} >5</button>
                <button onClick={() => {changeNumber(6)}} >6</button>
                <button onClick={() => {changeSimbolo("+")}} >+</button>
                <button onClick={() => {changeNumber(1)}} >1</button>
                <button onClick={() => {changeNumber(2)}} >2</button>
                <button onClick={() => {changeNumber(3)}} >3</button>
                <button onClick={() => {changeSimbolo("-")}} >-</button>
                <button onClick={() => {{changeNumber(".")}}} >.</button>
                <button onClick={() => {changeNumber(0)}} >0</button>
                <button onClick={result} className='button-grande1'>=</button>
            </div>
             
        </div>

    );
}

export default StartApp;