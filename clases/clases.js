//instance and static methods
// function Circle(){


//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// }


//class is not hoisted
// class Circle{
//     constructor(radius){
//         this.radius = radius;
//         this.move = function(){

//         }
//     }
//     draw(){
//         console.log('draw');
//     }

//     static parse(str){
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
    
//     }

//     static helloUser(userName){
//         alert(` hello ${userName}`)
//     }
// }



// const c = Circle.helloUser('Kuba');
// console.log(c);
'use strict'
// body of class is always triggered in strict mode

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle{
// constructor(radius){
//     this._radius = radius;
//     //the same a below
//     //this.['radius'] = radius;
//     this[_radius] = radius;
//     }

//     [_draw](){

//     }
// }

// const c = new Circle(4);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle{
constructor(radius){
        _radius.set(this, radius);
        _move.set(this, ()=>{
            console.log('move', this);
        });
    }

    draw(){
        //console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw');
    }

    get radius(){
        return _radius.get(this);
    }

    set radius(value){
        if(value <= 0) throw new Error('invalid radius');
        _radius.set(this, value);
        }
    }

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];


