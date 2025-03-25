
function cc(funcion: (n1: number, n2: number) => {}){
    let n1 = 1
    let n2 = 2
    return funcion(n1,n2)
}

const funcion1 = (n1,n2) => {
    return n1+n2
}

const funcion2 = (n1,n2) => {
    return n1 - n2
}

console.log(cc(funcion1))