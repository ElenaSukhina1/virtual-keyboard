const keybordSection = document.querySelector('.key-section')
const firstArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace']
const secondArr = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/', 'Del']
const thirdArr = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '′', 'Enter']
const fourArr = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift']
const fiveArr = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']

function createKeyBlock (){
for(let i = 0; i < 5; i++){
    let keyBlock = document.createElement('div')
    keybordSection.appendChild(keyBlock)
    keyBlock.classList.add('key-block')
    console.log(keyBlock)
}
}

createKeyBlock ()

// function createKeyButton1 (){
//     firstArr.forEach(value =>{
//         let firstKeyBlock = document.querySelectorAll('.key-block')[0]
//         let keyButton1 = document.createElement('button')
//         firstKeyBlock.appendChild(keyButton1)
//         keyButton1.classList.add('button')
//         keyButton1.textContent = value
//         if(keyButton1.textContent === 'Backspace'){
//             keyButton1.classList.add('backspace')
//         }
//     })
// }
// createKeyButton1 ()
console.log(document.querySelectorAll('.key-block'))
const keyBloks = document.querySelectorAll('.key-block')
const keyBloksArr = Array.from(keyBloks)
console.log(keyBloksArr)
function createKeyButtons(){
    keyBloksArr.forEach((value, index) => {
        firstArr.forEach(elem => {
           if(index === 0){
            let keyButton1 = document.createElement('button')
            value.appendChild(keyButton1)
            keyButton1.classList.add('button')
            keyButton1.textContent = elem
            if(keyButton1.textContent === 'Backspace'){
                keyButton1.classList.add('backspace')
            }
            }
        }) 
        secondArr.forEach(elem => {
            if(index === 1){
            let keyButton1 = document.createElement('button')
            value.appendChild(keyButton1)
            keyButton1.classList.add('button')
            keyButton1.textContent = elem
            if(keyButton1.textContent === 'Tab' || keyButton1.textContent === 'Del'){
                keyButton1.classList.add('tab')
            }
            }
        }) 
        thirdArr.forEach(elem => {
            if(index === 2){
            let keyButton1 = document.createElement('button')
            value.appendChild(keyButton1)
            keyButton1.classList.add('button')
            keyButton1.textContent = elem
            if(keyButton1.textContent === 'CapsLock' || keyButton1.textContent === 'Enter'){
                keyButton1.classList.add('caps')
            }
            }
        }) 
        fourArr.forEach(elem => {
            if(index === 3){
            let keyButton1 = document.createElement('button')
            value.appendChild(keyButton1)
            keyButton1.classList.add('button')
            keyButton1.textContent = elem
            if(keyButton1.textContent === 'Shift'){
                keyButton1.classList.add('caps')
            }
            }
        }) 
        fiveArr.forEach(elem => {
            if(index === 4){
            let keyButton1 = document.createElement('button')
            value.appendChild(keyButton1)
            keyButton1.classList.add('button')
            keyButton1.textContent = elem
            if(keyButton1.textContent === ' '){
                keyButton1.classList.add('space')
            }
            if(keyButton1.textContent === 'Ctrl' || keyButton1.textContent === 'Win' || keyButton1.textContent === 'Alt'){
                keyButton1.classList.add('ctrl')
            }
            }
        }) 
    })
}
createKeyButtons()


document.addEventListener('keydown', function(event) {
    let buttonsArr = Array.from(document.querySelectorAll('button'))
    console.log(event.key)
    buttonsArr.forEach(value=>{
        value.classList.remove('active')
        if(value.textContent === event.key){
            value.classList.add('active')
            
        }
    })
      

  });
