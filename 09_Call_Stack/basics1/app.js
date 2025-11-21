function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    debugger;    // <-- add this to force debugger pause
    let ans = two() + one();
    console.log(ans);
}

three();
