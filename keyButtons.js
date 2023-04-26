class Title {
    constructor(){
        this.elem = document.createElement('h1')
        this.text = document.createTextNode('RSS Виртуальная клавиатура')
    }
    apendTo(parent){
        parent.appendChild(this.elem)
        document.body.childNodes[2].appendChild(this.text)
    }

}
new Title().apendTo(document.body);

class Textarea {
    constructor(){
        this.elem = document.createElement('textarea')
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }
}

new Textarea().apendTo(document.body);

class Keysection {
    constructor(){
        this.elem = document.createElement('div')
    }
    apendTo(parent){
        parent.appendChild(this.elem)
    }
}
new Keysection().apendTo(document.body)