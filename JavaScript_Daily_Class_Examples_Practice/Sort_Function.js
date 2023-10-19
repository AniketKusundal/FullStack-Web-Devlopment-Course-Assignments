// Sort() --->    it is used to sort even array when we call sort function it will treat all item as a string and sort item Alphabatically

let arr = [12,62,45,1,2,3,4,55,11,21,30,31]
    console.log(arr);

    function mySort(a,b) {
        
        if(a>b) return 1
        if(a<b) return -1
        if(a==b) return 0
    }
    let arr1 =arr.sort(mySort)
    console.log(arr1);