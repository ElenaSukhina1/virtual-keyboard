class Title {
    constructor(){
        this.elem = document.createElement('h1')
        this.elem.textContent = 'RSS Виртуальная клавиатура'
        this.elem.classList.add('colortext')
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }

}
new Title().apendTo(document.body);

class Textarea {
    constructor(){
        this.elem = document.createElement('textarea')
        this.elem.classList.add('textarea-style')
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }
}

new Textarea().apendTo(document.body);

class Keysection {
    constructor(){
        this.elem = document.createElement('div')
        this.elem.classList.add('key-section')
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }
}
new Keysection().apendTo(document.body)

class Description {
    constructor(){
        this.elem = document.createElement('p')
        this.elem.classList.add('description')
        this.elem.textContent = 'Клавиатура создана в операционной системе Windows'
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }

}
new Description().apendTo(document.body)

class Lang {
    constructor(){
        this.elem = document.createElement('p')
        this.elem.classList.add('lang')
        this.elem.textContent = 'Для переключения языка комбинации: ctrl + alt'
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }
}
new Lang().apendTo(document.body)