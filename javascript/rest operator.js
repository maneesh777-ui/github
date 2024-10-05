// function add(x,y){
//     console.log("addition is="+(x+y))
// }
// add(10,20,30,40,50); only first two will be taken because we gave only two variables



function rest(...args){
    let result=0;
    for(let arg of args)
    {
        result=result+arg;
    }
    console.log("the final result is="+result)
    }
    rest(10,20,30,40,50);
