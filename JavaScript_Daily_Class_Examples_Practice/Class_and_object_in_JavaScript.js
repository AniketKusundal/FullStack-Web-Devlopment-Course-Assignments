// -------------------------------------     CLASS       AND        OBJECT         IN          JAVASCRIPT   ---------------------------------------------------------  \\












// this is the syntax for the creating the class

// class demo {
    
//     show(){
//         console.log("Hello Aniket");
//         console.log("This is First Class i can make");
//     }
// }

// let d = new demo()   // ------------> this is the object
// d.show()






//   constructor Method / function ---->  constructor method automatically calledd when we create a object of the class it is use to initalize values of the variables it is called every time when we create object of the class

//    the name oof the medthod most be constructor


// class test1 {
//     constructor(){
//         console.log("constructor called !!");
//     }
// }


//         let t1  = new test1()
//         let t2  = new test1()
//         let t3  = new test1()










//     This Keyword   --------------->   this keyword use to represent current class object means who can constructor or function

//     this keyword is use to  access or modify the values presenting the object



    // [  NOTE  ] ---->  WE CAN  NOT USE FUNCTION KEY TO LET OR VAR KEYWORD TO DECLARE VARIABLE 

    // [  NOTE  ] ---->  WE DO NOT USE FUNCTION KEY TO DECLARE FUNCTION IN THE CLASS 
    
    


    //   [    EXAMPLE  ]  ---->


        class student {
            constructor(Sid,Sname){
                this.id=Sid
                this.Fname=Sname
            }

            showstudent(){
                console.log(this.id,this.Fname);
            }
        }



        let s1 = new student (1,"ak")
        let s2 = new student (2,"ak")


        s1.showstudent()
        s2.showstudent()