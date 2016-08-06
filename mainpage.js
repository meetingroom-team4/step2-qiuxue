let zipcodeToBarcode=require('./zipcodeToBarcode');
let error=require('./error');
function mainPage(input) {
    return {
        text:`
1.translate zipcode to barcode 
2.translate barcode to zipcode
3.Quit
Please input your choice(1~3)`,
        newMapping:{
            "1":zipcodeToBarcode,
            "*":error
        }
    }
}
module.exports=mainPage;