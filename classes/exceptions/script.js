let obj = [17]
let index = 100

try {
    if(!obj.includes(17)) {
        throw new Error(`the element 17 is not avaible in the ${obj}`)
    }
    if(index > 99) {
        throw new RangeError("number out of the interval")
    }

} catch (error) {
    console.log(error)
}