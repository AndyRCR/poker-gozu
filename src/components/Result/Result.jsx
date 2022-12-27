import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { tipo } from './Poker'
import './Result.css'

const arr = []
const probabilidad = {'td':0.30240, '1p':0.50400, '2p':0.10800, 'tercia':0.07200, 'full':0.00900, 'poker':0.00450, 'quintilla':0.00010}
const fo = {'td':0, '1p':0, '2p':0, 'tercia':0, 'full':0, 'poker':0, 'quintilla':0}
const fe = {'td':0, '1p':0, '2p':0, 'tercia':0, 'full':0, 'poker':0, 'quintilla':0}
let x2 = 0

const trunc = (num,x) => {
  return parseFloat(num.toFixed(x))
}

const Result = () => {

  const {fileContent, resultado, setResultado} =useContext(GlobalContext)

  useEffect(() => {
    if(fileContent !== null){
      for(const tipoMano of Object.keys(fe)){
        fe[tipoMano] = trunc(fileContent.length * probabilidad[tipoMano], 3)
      }

      for(const numero of fileContent){
        fo[tipo(numero)] += 1
  
        arr.push({
          numero: numero,
          tipo: tipo(numero)
        })
      }

      for(const tipoMano of Object.keys(fe)){
        x2 += trunc((Math.pow((fo[tipoMano] - fe[tipoMano]), 2)) / fe[tipoMano], 3)
      }

      setResultado({
        tipos: arr,
        fe,
        fo,
        x2,
        resultado: x2 < 9.49 ? 'No se rechaza' : 'Se rechaza'
      })
    }
    
  }, [fileContent])
  
  return (
    <div className='resultContainer'>
      <div className='resultDiv'>
        <div className='Probabilidad'>
          <h4>Probabilidades: </h4>
          <ul>
            <li>Td(Todos diferentes): 0.30240</li>
            <li>1P(1 par): 0.50400</li>
            <li>2P(2 pares): 0.10800</li>
            <li>Tercia(3 iguales): 0.07200</li>
            <li>Full House(1 par y 1 trío): 0.00900</li>
            <li>Poker(4 iguales): 0.00450</li>
            <li>Quintilla(5 iguales): 0.00010</li>
          </ul>
        </div>

        <div className='FrecuenciaEsperada'>
          <h4 >Frecuencia esperada: </h4>
          <ul>
            <li>TD: {fe['td']}</li>
            <li>1P: {fe['1p']}</li>
            <li>2P: {fe['2p']}</li>
            <li>TERCIA: {fe['tercia']}</li>
            <li>FULL: {fe['full']}</li>
            <li>POKER: {fe['poker']}</li>
            <li>QUINTILLA: {fe['quintilla']}</li>
          </ul>
        </div>

        <div className='FrecuenciaObtenida'>
          <h4>Frecuencia obtenida: </h4>
          <ul >
            <li>TD: {fo['td']}</li>
            <li>1P: {fo['1p']}</li>
            <li>2P: {fo['2p']}</li>
            <li>TERCIA: {fo['tercia']}</li>
            <li>FULL: {fo['full']}</li>
            <li>POKER: {fo['poker']}</li>
            <li>QUINTILLA: {fo['quintilla']}</li>
          </ul>
        </div>
      </div>

      <div className='Resultado'>
        <h4>Resultados obtenidos</h4>
          <p>Variable: {resultado['x2']}</p>
          <p >{resultado.resultado} que los números siguen una distribución uniforme</p>
      </div>
    </div>
  )
}

export default Result