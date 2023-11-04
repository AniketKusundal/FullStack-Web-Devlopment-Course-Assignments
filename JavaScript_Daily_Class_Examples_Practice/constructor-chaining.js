
//  Example [1]
// class A {
//     constructor(){
//         console.log("Base class constructor");
//     }
// }

// class B extends A{
//         constructor(){
//         super();
//         console.log("derive class constructor");
//     }
// }

// let ob = new B()



//  Example [2]


class X {
    constructor(){
        this.i=100
        console.log("Base class constructor");
        
    }
}



class Y extends X{
    constructor(){
        super()
        this.j=200
        console.log("derive class constructor")
        
    }
    
     add(){
        console.log(this.i+this.j);
    }
}

let ob = new Y()
ob.add()




//  in javascript we have to manually called the base class constructor to derive class using super() Keyword
