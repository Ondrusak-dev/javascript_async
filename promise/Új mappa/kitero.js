/**
 * @param {number} num
 * @return {Promise<number>}
 */
const byApple1 = (num) => {
    if(num <5){
        return Promise.resolve(num)
    }
    else{
        return Promise.reject(num)
    }

}

console.log("Indul a program")
const res1 = byApple1(3)
console.log(res1)
res1.then((value) => {
    console.log(`Vásárolt alma: ${value}`)
})
console.log("Vége a programnak")

/**
 * 
 * @param {number} num 
 * @returns {Promise<number>}
 */
const byapple2 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num <5){
                resolve(num)
            }
            else{
                reject(num)
            }
        }, 3000)
        
    })
}

console.log("Indul a buyapple2 program")
const res2 = byapple2(3)
console.log(res1)
res1.then((value) => {
    console.log(`Vásárolt alma: ${value}`)
})

console.log("Vége a buyapple2 programnak")

const res3 = byapple2(5)
res3.then((value) => {
    console.log(`vásárolt alma : ${value}`)
}).catch((calue) => {
    console.log(`vásárolt alma : ${calue}`)
})
