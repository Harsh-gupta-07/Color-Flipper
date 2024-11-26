let header =  document.getElementById("color")
let colorcode = document.getElementById("Changecolorcode")

function changecol(){
   if(colorcode.value == "rgb"){
        colorrgb();
   }else if(colorcode.value == "rgba"){
        colorrgba()
   }
   else{
        colorhex()
   }
}

function randomcolor(){
    return  Math.floor(Math.random()*256)
}

function randomopacity(){
    return Math.random().toFixed(2)
}

function colorrgb(){
    document.querySelector("div").style.width = "600px"
    let rgb = [randomcolor(),randomcolor(),randomcolor()]
    console.log(rgb)
    header.innerText= `Current Color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    document.querySelector("body").style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function colorhex(){
    document.querySelector("div").style.width = "600px"
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


function colorrgba(){
    document.querySelector("div").style.width = "700px"
    let rgb = [randomcolor(),randomcolor(),randomcolor(),randomopacity()]
    console.log(rgb)
    header.innerText= `Current Color: rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`
    document.querySelector("body").style.backgroundColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`
}
