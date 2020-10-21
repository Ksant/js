"use scrict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    caclArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}.`);
    }
}

const square = new Rectangle(10,10);
console.log(square.caclArea());
const div = new ColoredRectangleWithText(10,20,'привет!', 'red');
console.log(div.caclArea());
div.showMyProps();