function oneThroughTwenty() {
    let numeros = []
    for (let i = 1; i <= 20; i++) {
        numeros.push(i)
    }
    return numeros
}

console.log(oneThroughTwenty())

// call
// function oneThroughTwenty

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function evensToTwenty() {
    let par = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            par.push(i);
        }
    }

    return par;

}

console.log(evensToTwenty())
    // call
    // function evensToTwenty

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function oddsToTwenty() {
    let impar = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 1) {
            impar.push(i);
        }
    }
    return impar;

}

console.log(oddsToTwenty())

// call
// function oddsToTwenty

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function multiplesOfFive() {
    let multiplosCinco = []
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            multiplosCinco.push(i)
        }
    }
    return multiplosCinco;

}


console.log(multiplesOfFive())
    // call
    // function multiplesOfFive

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function squareNumbers() {
    let quadrados = [];

    for (let i = 1; i <= 100; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            quadrados.push(i)
        }
    }
    return quadrados
}
console.log(squareNumbers())

// call
// function squareNumbers

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function countingBackwards() {
    let numerosTras = [];

    for (let i = 20; i >= 1; i--) {
        numerosTras.push(i)
    }
    return numerosTras
}
console.log(countingBackwards())

// call
// function countingBackwards

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function evenNumbersBackwards() {
    let numerosTrasPar = [];

    for (let i = 20; i >= 1; i--) {
        if (i % 2 === 0) {
            numerosTrasPar.push(i)
        }
    }
    return numerosTrasPar
}
console.log(evenNumbersBackwards())
    // call
    // function evenNumbersBackwards

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function oddNumbersBackwards() {
    let numerosTrasImpar = [];

    for (let i = 20; i >= 1; i--) {
        if (i % 2 == 1) {
            numerosTrasImpar.push(i)
        }
    }
    return numerosTrasImpar
}
console.log(oddNumbersBackwards())

// call
// function oddNumbersBackwards

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function multiplesOfFiveBackwards() {
    let multiplosCincoTras = [];

    for (let i = 20; i >= 1; i--) {
        if (i % 5 == 0) {
            multiplosCincoTras.push(i)
        }
    }
    return multiplosCincoTras
}

console.log(multiplesOfFiveBackwards())

// call
// function multiplesOfFiveBackwards

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function squareNumbersBackwards() {
    let quadradosTras = [];

    for (let i = 100; i >= 1; i--) {
        if (Math.sqrt(i) % 1 === 0) {
            quadradosTras.push(i)
        }
    }
    return quadradosTras
}

console.log(squareNumbersBackwards())


// call
// function squareNumbersBackwards