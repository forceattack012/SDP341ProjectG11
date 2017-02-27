function randomTime(){
    return Math.random()*5000
}
function a(cb){
    setTimeout(function(){cb("a");},randomTime());
}
function b(cb){
    setTimeout(function(){cb("b");},randomTime());
}
function c(cb){
    setTimeout(function(){cb("c");},randomTime());
}
function d(cb){
    setTimeout(function(){cb("d");},randomTime());
}

/*var result = a(function(){});
console.log(result);
result = b();
console.log(result);
result = c();
console.log(result);
result = d();
console.log(result);

a(function(result){
    console.log(result);
    b(function(result){
    console.log(result);
        c(function(result){
        console.log(result);
            d(function(result){
            console.log(result);
            });
        });
    });
});
*/


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Parrallel xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var allfunction = [];
allfunction.push(a);
allfunction.push(b);
allfunction.push(c);
allfunction.push(d);
allfunction.push(a);
allfunction.push(b);
allfunction.push(c);
allfunction.push(d);
allfunction.push(a);
allfunction.push(b);
allfunction.push(c);
allfunction.push(d);
/*
allfunction.forEach(function(value,index,alldata){
    value(function(result){
      console.log(result);  
    })
});*/
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var running = 0;
var limit=2;
var index=0;
var maxitem=12;

function callLimit(){
    while(running < limit && index < maxitem){
        allfunction[index++](function(result){
            running--;
            if(index < maxitem) callLimit();
            console.log(result);
        });
        running++;
    }
}
callLimit();