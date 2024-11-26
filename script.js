let header =  document.getElementById("color")
let colorcode = document.getElementById("Changecolorcode")

function changecol(){
//    console.log(colorcode.value)

   if(colorcode.value == "rgb"){
        colorrgb();
   }else{
        colorhex()
   }
    // `color${colorcode.value}()`
}

function randomcolor(){
    return  Math.floor(Math.random()*256)
}

function colorrgb(){
    let rgb = [randomcolor(),randomcolor(),randomcolor()]
    console.log(rgb)
    header.innerText= `Current Color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    document.querySelector("body").style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function colorhex(){
    let rgb = [converthex(), converthex(),converthex()]
    console.log(rgb)
    document.querySelector("body").style.backgroundColor = `#${rgb[0]}${rgb[1]}${rgb[1]}`
    header.innerText= `Current Color: #${rgb[0]}${rgb[1]}${rgb[1]}`
}

function converthex(){
    let n= randomcolor()
    let temp = ""
    let hex= ["A","B","C","D","E","F"]
    while(n){
        let d = n%16
        if(d>9){
            temp += `${hex[d-10]}`
        }else{
            temp+= `${d}`
        }
        n= Math.floor(n/16)
    }
    if (temp.length==1){
        temp= `0${temp}`
    }
    return temp
}