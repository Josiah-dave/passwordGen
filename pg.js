// Loops
// for loop
for (let x = 1; x<= 6; x++ ) {
    console.log(x)
}
for (let y = 6; y<= 1; y-- ) {
    console.log(x)
}

let num = ""
for (let x = 0; x <= 9; x++) {
    num += x
}
console.log(num)
///////////////////////////////////////////////////////////////////////////
let word = "abcdefghijklmnop"
let hWord = ""
for (let x = 0; x <= 7; x++){
    hWord += word[x]
}
console.log(hWord)

//////////////////////////////////////////////////////////////////////////
 let pass = "abcdefghijklmnop0987654321.,;'-=/)(*&^%$#@!"
let password = " "
for (let x = 0; x <= 8; x++){
    let passRand = Math.floor(Math.random() * pass.length)
    password += pass [passRand]
}
console.log(password)



let generated = document.getElementById('password')
let btn = document.getElementById('btn')
let char = "abcdefghijklmnop0987654321.,;'-=/)(*&^%$#@!"

btn.addEventListener('click', () =>{
    let passval = ""
    for (let x = 0; x <= 8; x++){
    let passRand = Math.floor(Math.random() * pass.length)
    passval += pass [passRand]
}
generated.value = passval
})