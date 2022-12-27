const crearGuia = numero => {
    let decimal = numero.replace("0.","")
    const guia = {}
    const numArray = Array.from(decimal)

    for(const pos in decimal){
        if(!guia.hasOwnProperty(numArray[pos])){
            guia[numArray[pos]] = 0
        }
    }

    for(const el of decimal){
        guia[el] += 1
    }

    return guia
}

const quintilla = numero => {
    let decimal = numero.replace("0.","")
    let primerDigito = decimal[0]

    for (const el of decimal) {
        if (el !== primerDigito) return false
    }
    return true
}

const full = numero => {
    const guia = crearGuia(numero)

    if(Object.values(guia).indexOf(2) !== -1 && Object.values(guia).indexOf(3) !== -1) return true

    return false
}

const tercia = numero => {
    const guia = crearGuia(numero)
    for(const el of Object.values(guia)){
        if(el >= 3) return true
    }

    return false
}

const poker = (numero) => {
    const guia = crearGuia(numero)

    for(const el of Object.values(guia)){
        if(el >= 4) return true
    }

    return false
}

const onep = numero => {
    const guia = crearGuia(numero)

    for(const el of Object.values(guia)){
        if(el >= 2) return true
    }

    return false
}

const twop = numero => {
    const guia = crearGuia(numero)

    if(onep(numero)){
        let par = null
        const newArr = Object.keys(guia).map(x=>[x, guia[x]])

        for(const el of newArr){
            if(el[1] >= 2){
                par = el[0]
                break
            }
        }

        delete guia[par]

        for(const el of Object.values(guia)){
            if(el >= 2) return true
        }

        return false
    } else{
        return false
    }
}

const td = numero =>{
    let decimal = numero.replace("0.","")
    return decimal.length !== new Set(decimal).size
}

const tipo = numero => {
    if(quintilla(numero)) return "quintilla"
    else if(poker(numero)) return "poker"
    else if(full(numero)) return "full"
    else if(tercia(numero)) return "tercia"
    else if(twop(numero)) return "2p"
    else if(onep(numero)) return "1p"
    else return "td"
}

export { quintilla, full, poker, tercia, onep, twop, td, tipo }