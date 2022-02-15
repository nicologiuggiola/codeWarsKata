// +(012) 345-6789


function base() {
    let range = [...new Array(100).keys()];
    let format = "+(xxx) xxx-xxxx";
    for (let i = 0; i < range.length; i++) {
        format = format.replace("x", range[i]);
    }
    return format;
}

function random() {
    let range = Array.from({length:10}, () => Math.floor(Math.random() * 10));
    let format = "+(xxx) xxx-xxxx";
    for (let i = 0; i < range.length; i++) {
        format = format.replace("x", range[i]);
    }
    return format;
}


function random2(){
    return Array.from({length:10}, () => Math.floor(Math.random() * 10)).reduce((p,c) => p.replace("x", c) , "+(xxx) xxx-xxxx");
}



console.log(random2());