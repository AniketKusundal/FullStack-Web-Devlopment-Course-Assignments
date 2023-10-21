    // class test{
    //     setname(n){
    //         this.setname=n
    //     }

    //     getname(){
    //         return this.setname
    //     }
    // }

    // let t1 = new test()
    // t1.setname("abx")
    // let Fname=t1.getname()
    // console.log(Fname);




//   [Example 2] 

class test1{
    set name(n){
        this._name=n
        console.log("Setter called");
    }

    get name(){
        console.log("Getter is called");
        return this._name

    }
}

let t1 = new test1()
t1._name="aniket"
console.log(t1._name);






// For Assign -->  called the set
// For Execute -->  called the Get