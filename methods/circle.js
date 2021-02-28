const _radius = new WeakMap();
const _name = new WeakMap();
const _color = new WeakMap();

export class Circle{
    constructor(radius, name, color){
    _radius.set(this, radius);
    _name.set(this, name);
    _color.set(this, color);
    }

    draw(){
        console.log(`circle with radius ${_radius.get(this)}`)
    }

    nameAndRadius(){
        console.log(`my name is ${_name.get(this)} and my radius is ${_radius.get(this)}`)
    }

    fullProp(){
        console.log(`my name is ${_name.get(this)}, my radius is ${_radius.get(this)} and I am ${_color.get(this)}`)
    }
}
