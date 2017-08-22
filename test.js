var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];

var result = []
nums1.forEach((e,index) =>{

    if(nums2.findIndex((w)=>{
        return w ===e
        })!== -1){
        var i = nums2.findIndex((w)=>{
            return w ===e
        });
        result.push(e);
        nums2.splice(i,1);
    }
})
console.log(result);