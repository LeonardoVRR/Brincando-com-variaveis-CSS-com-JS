let sliderSpacing = document.querySelector(".slidecontainer__spacing")
let sliderBlur = document.querySelector(".slidecontainer__blur")
let sliderColor = document.querySelector(".slidecontainer__color")

sliderBlur.addEventListener('input', function(){
    let valor = sliderBlur.value

    document.documentElement.style.setProperty('--blur', `${valor}`)
})

sliderColor.addEventListener('input', function(){
    let valor = sliderColor.value

    document.documentElement.style.setProperty('--corFundoImg', `${valor}`)
})

sliderSpacing.addEventListener('input', function(){
    let valor = sliderSpacing.value

    document.documentElement.style.setProperty('--espacamentoImg', `${valor}`)
})