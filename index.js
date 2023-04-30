const keybordSection = document.querySelector('.key-section')
let firstArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace']
let secondArr = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del']
let thirdArr = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '′', 'Enter']
let fourArr = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift']
let fiveArr = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']

let secondArrRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del']
let thirdArrRu = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter']
let fourArrRu = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift']

function createKeyBlock (){
for(let i = 0; i < 5; i++){
    let keyBlock = document.createElement('div')
    keybordSection.appendChild(keyBlock)
    keyBlock.classList.add('key-block')
    console.log(keyBlock)
}
}

createKeyBlock ()


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

const buttonsArr = Array.from(document.querySelectorAll('button'))
document.addEventListener('keydown', function(event) {
    console.log(event.key)
    buttonsArr.forEach(value=>{
        value.classList.remove('active')
        // не подсвечивает стрелки ctrl
        if(event.key === 'Control' && value.textContent === 'Ctrl'){
            value.classList.add('active') 
        } else if(event.key === 'Meta' && value.textContent === 'Win'){
            value.classList.add('active') 
        }else if(event.key === 'Delete' && value.textContent === 'Del'){
            value.classList.add('active') 
        } else if(event.key === 'ArrowUp' && value.textContent === '▲'){
            value.classList.add('active') 
        }else if(event.key === 'ArrowLeft' && value.textContent === '◄'){
            value.classList.add('active') 
        }else if(event.key === 'ArrowDown' && value.textContent === '▼'){
            value.classList.add('active') 
        }else if(event.key === 'ArrowRight' && value.textContent === '►'){
            value.classList.add('active') 
        }
        else if(value.textContent === event.key){
            value.classList.add('active') 
        }
    })
  });

  document.addEventListener('keyup', function(event) {
    buttonsArr.forEach(value=>{
        if(event.key === 'Control' && value.textContent === 'Ctrl'){
            value.classList.remove('active')
        } else if(event.key === 'Meta' && value.textContent === 'Win'){
            value.classList.remove('active')
        } else if(event.key === 'Delete' && value.textContent === 'Del'){
            value.classList.remove('active') 
        }else if(event.key === 'ArrowUp' && value.textContent === '▲'){
            value.classList.remove('active') 
        }else if(event.key === 'ArrowLeft' && value.textContent === '◄'){
            value.classList.remove('active') 
        }else if(event.key === 'ArrowDown' && value.textContent === '▼'){
            value.classList.remove('active') 
        }else if(event.key === 'ArrowRight' && value.textContent === '►'){
            value.classList.remove('active') 
        }
        else if(value.textContent === event.key){
            value.classList.remove('active') 
        }
    })
  });

  let text = document.querySelector('.textarea-style')
  console.log(text)

for(let key of buttonsArr){
    key.onclick = function(){
        if(key.textContent === 'Backspace'){
            text.value = text.value.slice(0, -1)
        }
         else if(key.textContent === 'Del'){
            console.log(text.selectionStart, text.value[text.selectionStart])
            text.value = text.value.slice(0, text.selectionStart) + text.value.slice(text.selectionStart+1)
        } 
        // if(key.textContent === 'Enter'){  Сделать Enter
        //     text.value += '\n'
        // } 
        else {
        console.log(key.textContent)
        text.value +=  key.textContent;
        }
    }
}

// смена языка
// function runOnKeys(changeLang, ...codes) {
//     let pressed = new Set();
//     document.addEventListener('keydown', function(event) {
//       pressed.add(event.code);
//       for (let code of codes) { // все ли клавиши из набора нажаты?
//         if (!pressed.has(code)) {
//           return;
//         }
//       }
//       pressed.clear();

//       changeLang();
//     });
//     document.addEventListener('keyup', function(event) {
//       pressed.delete(event.code);
//     });

//   }

//   runOnKeys(
//     () => changeLang(),
//     "ControlLeft",
//     "AltLeft"
//   );
//   runOnKeys(
//     () => changeLang(),
//     "ControlRight",
//     "AltRight"
//   );

//   function changeLang(){
//     let arr2 = document.querySelectorAll('.key-block')[1]
//     let arr3 = document.querySelectorAll('.key-block')[2]
//     let arr4 = document.querySelectorAll('.key-block')[3]
//     let child2 = Array.from(arr2.children)
//     let child3 = Array.from(arr3.children)
//     let child4 = Array.from(arr4.children)
//      for(let i = 0; i < child2.length; i++){
//         for(let y = 0; y < secondArrRu.length; y ++){
//             child2[i].innerHTML = secondArrRu[y]
//             i++;
//         }
//      }
//      for(let i = 0; i < child3.length; i++){
//         for(let y = 0; y < thirdArrRu.length; y ++){
//             child3[i].innerHTML = thirdArrRu[y]
//             i++;
//         }
//      }
//      for(let i = 0; i < child4.length; i++){
//         for(let y = 0; y < fourArrRu.length; y ++){
//             child4[i].innerHTML = fourArrRu[y]
//             i++;
//         }
//      }
  
//   }
  