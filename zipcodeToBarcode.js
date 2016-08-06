function corrected() {
    return {
        text:'zipcode has been correctly handle'
    }
}

function zipcodeToBarcode() {
    return {
        text:'please input zipcode',
        newMapping:{
            '*':corrected
        }
    }
}

module.exports=zipcodeToBarcode;