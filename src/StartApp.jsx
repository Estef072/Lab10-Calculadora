/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './StartApp.scss';

function StartApp() {
  const [num, setNum] = useState('');
  const [num2, setNum2] = useState('');
  const [dato, setDato] = useState('');
  const [resulta, setResult] = useState(0);
  const [bandera, setBandera] = useState(true);

  function changeNumber(index) {
    if (dato === '') {
      setNum(num + index);
      setBandera(true);
    } else {
      setNum2(num2 + index);
      setBandera(false);
    }
  }

  function changeSimbolo(index) {
    setDato(index);
  }
  function restDatos(valor) {
    valor = valor.toString();
    if (Number(valor) > 999999999) {
      return 'error';
    }
    if (valor.length > 9) {
      valor = valor.substring(0, 9);
    }
    return valor;
  }
  function evaluar() {
    if (bandera) {
      setNum(Number(num) * -1);
    } else {
      setNum2(Number(num2) * -1);
    }
  }

  function result() {
    switch (dato) {
      case '+':
        setResult(restDatos(Number(num) + Number(num2)));
        break;
      case '-':
        setResult(restDatos(Number(num) - Number(num2)));
        break;
      case '*':
        setResult(restDatos(Number(num) * Number(num2)));
        break;
      case '/':
        setResult(restDatos(Number(num) / Number(num2)));
        break;
      case 'mod':
        setResult(Number(num) % Number(num2));
        break;

      default:
    }
  }
  function limpiar() {
    setNum('');
    setNum2('');
    setDato('');
    setResult('');
  }

  return (
    <div className="Calculator" data-testid="input-test-test">
      <h1 className="titulo">Calculator</h1>
      <div className="grid-calc">
        <div className="muestra-datos">
          <div className="entrada-datos">{dato ? num + dato : ''}</div>
          <div className="salida-datos" data-testid="suma">{resulta ? restDatos(resulta) : (!dato ? num : num2)}</div>
        </div>
        <button type="button" onClick={limpiar} className="button-grande">CLEAR</button>
        <button type="button" onClick={() => { changeSimbolo('mod'); }}>mod</button>
        <button type="button" onClick={() => { changeSimbolo('/'); }} data-testid="ButtonDivi">/</button>
        <button type="button" onClick={evaluar}>+/-</button>
        <button type="button" onClick={() => { changeNumber(7); }} data-testid="Testnumero7">7</button>
        <button type="button" onClick={() => { changeNumber(8); }} data-testid="Testnumero8">8</button>
        <button type="button" onClick={() => { changeNumber(9); }} data-testid="Testnumero9">9</button>
        <button type="button" onClick={() => { changeSimbolo('*'); }} data-testid="ButtonPor">*</button>
        <button type="button" onClick={() => { changeNumber(4); }} data-testid="Testnumero4">4</button>
        <button type="button" onClick={() => { changeNumber(5); }} data-testid="Testnumero5">5</button>
        <button type="button" onClick={() => { changeNumber(6); }} data-testid="Testnumero6">6</button>
        <button type="button" onClick={() => { changeSimbolo('+'); }} data-testid="ButtonMas">+</button>
        <button type="button" onClick={() => { changeNumber(1); }} data-testid="Testnumero1">1</button>
        <button type="button" onClick={() => { changeNumber(2); }} data-testid="Testnumero2">2</button>
        <button type="button" onClick={() => { changeNumber(3); }} data-testid="Testnumero3">3</button>
        <button type="button" onClick={() => { changeSimbolo('-'); }} data-testid="ButtonMenos">-</button>
        <button type="button" onClick={() => { changeNumber('.'); }} data-testid="ButtonPunto">.</button>
        <button type="button" onClick={() => { changeNumber(0); }}>0</button>
        <button type="button" onClick={result} data-testid="ButtonIgual" className="button-grande1">=</button>
      </div>
    </div>

  );
}
export default StartApp;
