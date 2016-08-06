let commandMainPage=require('./mainpage');

const defaultMapping={
    "*":commandMainPage
};
let mapping=defaultMapping;
function route(input) {
    let command=mapping[input]||mapping['*'];
    let response=command(input);

    if(response.newMapping){
        mapping=response.newMapping;
        return {
            text:response.text
        }
    }
    return {
        text:response.text
    }
}

module.exports=route;