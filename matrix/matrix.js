// This was also part of the test symbol. 
// var symbol;
var streams = [];
var symbolSize = 14;


function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);
    var x = 0;
    // var y = 0;
    for (var i = 0; i <= width / symbolSize; i++) {
        var stream = new Stream();
        stream.generateSymbols(x, random(-2000, 0));
        streams.push(stream);
        x += symbolSize;
    }

    textSize(symbolSize);
    // stream = new Stream();
    // stream.generateSymbols();
    //This was the test symbol
    // symbol = new Symbol(
    //     width / 2,
    //     0,
    //     random(5, 10)
    // );
    // symbol.setToRandomSymbol();

}
function draw() {
    background(0, 150);
    streams.forEach(function(stream) {
        stream.render();        
    });
    // stream.render();    
}

function Symbol(x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;

    this.speed = speed;
    this.switchInterval = round(random(20, 30));
    this.first = first;
    this.opacity = opacity;


    this.setToRandomSymbol = function () {
        var charType = round(random(0, 5));
        if (frameCount % this.switchInterval == 0) {
            if (charType > 1) {
                // Katakana Characters
                this.value = String.fromCharCode(
                    0x30A0 + round(random(0, 97))
                );
            }else {
                // numeric character
                this.value = floor(random(0, 10));
            }
 
        }        
    }
    // This is used to render the single character
    // this.render = function() {
    //     fill(0, 255, 70);
    //     text(this.value, this.x, this.y);
    //     this.rain();
    //     this.setToRandomSymbol();
    // }
    this.rain = function() {
        // if (this.y >= height) {
        //     this.y = 0;
        // }else {
        //     this.y += this.speed;
        // }
        // The code below does the same as the code above. 
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }        
}
function Stream() {
    // An array of symbols to be used
    this.symbols = [];
    // This sets the number of chars in each stream
    this.totalSymbols = round(random(10, 50))
    // This tells each stream how fast it is traveling
    this.speed = round(random(3, 8));

    this.generateSymbols = function (x, y) {
        var first = round(random(0, 4)) == 1;
        // var y = 0;
        // var x = width / 2;
        for( var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed, first, opacity);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            opacity -= (255 / this.totalSymbols) / fadeInterval;
            y -= symbolSize;
            first = false;
        }
    }
    // This gives the symbol the job of rendering itself
    this.render = function() {
        this.symbols.forEach(function(symbol) {
            if(symbol.first) {
                fill(180, 255, 180, symbol.opacity);            
            }else {
                fill(0, 255, 70, symbol.opacity);
            }

            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();
        });        
    }
}