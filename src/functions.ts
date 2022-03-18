// Dev functions for using stack calculator in other applications.

export { calculate }

function calculate(itemcount: number, returnShulker: boolean = false){
    if(!itemcount) return console.error("itemcount is undefined")
    if(itemcount < 64) return console.error("itemcount is less then 64")

    const stack: number = Math.ceil(itemcount / 64)
    const shulker: number = Math.ceil(stack / 27)
    
    const returnarray: number[] = new Array( stack, shulker )

    if(returnShulker) return returnarray
    return stack
}