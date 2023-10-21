
//  #(Hash)   ----> it use to declare the private variable in the javaScript

class test{
    #name
    set name (n){
        this.#name=n
        console.log("Setter is called");
    }


    get name (){
        console.log("Getter is called");
        return this.#name
    }
}

        let t1 = new test()
        t1.name = "ani"
        console.log(t1.name);