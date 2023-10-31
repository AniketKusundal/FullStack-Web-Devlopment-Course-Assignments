// Inheritance  -->  it is used to create new class with the content of existing class the main purpose of the inheritance is code resuability


// [Example]

class a{
    show(){
        console.log("in base class");
    }
}
    class b extends a{
        display(){
            console.log("in derived class");
        }
    }


let ob = new b()
ob.show()
ob.display()