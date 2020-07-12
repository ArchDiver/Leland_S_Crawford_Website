var = symbol;

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);
    symbol = new Symbol(
        width / 2,
        height / 2

    );
    symbol.setToRandomSymbol();

}


function draw() {
    symbol.render();
    
}

function Symbol() {
    this.x =x;
    this.y = y;
    this.value;

    this.setToRandomSymbol = function () {
        this.value = String.fromCharCode(
            0x30A0 + round(random(0, 97))
        );        
    }
    this.render = function() [
        fill(0, 255, 70);
        Text(this.value, this.x, this.y);
    ]        
}


function Stream() {
    
}