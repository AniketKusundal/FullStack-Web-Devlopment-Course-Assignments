//  static function() -->  we can declare static variable inside class static variable has following property

        //  [1]  static function declare by using static keyword
        // [2]   static function can use static data  (we can not use this keyword inside static function)
        // [3]   static function called class name only
        // [4]   static medthod can not be called with obkject



        // EXAMPLE


        class test{
            static j=0
            constructor(x){
                this.i=x
                test.j++
            }


            static show(){
                console.log(test.jd);
            }
        }


            t1 = new test(10)
            t2 = new test(20)
            t3 = new test(30)

        test.show()   //   --> class name called