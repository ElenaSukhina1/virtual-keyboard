const keybordSection = document.querySelector('.key-section')
const firstArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace']


function createKeyBlock (){
for(let i = 0; i < 5; i++){
    let keyBlock = document.createElement('div')
    keybordSection.appendChild(keyBlock)
    keyBlock.classList.add('key-block')
    console.log(keyBlock)
}
}

createKeyBlock ()

function createKeyButton1 (){
    firstArr.forEach(value =>{
        let firstKeyBlock = document.querySelectorAll('.key-block')[0]
        let keyButton1 = document.createElement('button')
        firstKeyBlock.appendChild(keyButton1)
        keyButton1.classList.add('button')
        keyButton1.textContent = value
        if(keyButton1.textContent === 'Backspace'){
            keyButton1.classList.add('backspace')
        }
    })
}
createKeyButton1 ()
