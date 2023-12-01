// let x = 10
// let y = 20
// let z = x + y
// console.log(z);



// let s1 = "Hello"
// let s2 = "World"
// let s3 = s1 + s2
// console.log(s3);





class animal {

    talk(){
        console.log("Animal makes sound");
    }
}

class duck extends animal{
    talk(){
        console.log("QUACK......... QUACK.........");
    }
}


class dog extends animal{
    talk(){
        console.log("BOW......... BOW...........");
    }
}



let obj = new dog()
    obj.talk()


let obj2 = new duck()
    obj2.talk()