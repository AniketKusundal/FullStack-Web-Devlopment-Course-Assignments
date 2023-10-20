// Computed-Names-in-javaScript         ----------->>>  javascript allows us to crate names of the function or variable during the runtime for this purpose we use []  square braket  and in the square braket we can specify the names of the function or the variable



//      [Example]


    class test{
        ['sayhi'](){
            console.log("helloworld");
        }


        setdata (key,value){
            let d1 = {[key]:value}    // -------->>>  this is object
            console.log(d1);
        }
    }


    let t1 = new   test()
    t1.sayhi()
    t1.setdata("id",1)
    t1.setdata("name","aniiii")
    t1.setdata("phone",977789544)
