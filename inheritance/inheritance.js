class Shape{
    constructor(color, surface){
        this.color = color;
        this.surface = surface
    }

    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    constructor(color, surface, radius){
        super(color, surface);
        this.radius = radius;    
    }
 

    draw(){
        console.log('draw');
    }
}

const c = new Circle('red', 34, 4);

