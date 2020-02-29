

let sign = "x";
var sel= document.getElementById("select");
sel.innerHTML=" Turn of " + sign;

function printx(num){
    var pos = document.getElementById('q'+num);
    // console.log(pos);
    // console.log(num);
    // console.log(sign);
    if(pos.innerText==""){
        pos.innerHTML= sign; 
        checksign();
        //data();
        winner();
        
    }
}

function checksign(){
    if(sign=="x"){
        sign="o";
    }
    else if (sign=="o") {
        sign="x";
    }
    var sel= document.getElementById("select");
    sel.innerHTML=" Turn of  " + sign;
    // else{
    //     continue;
    // }
}

function mat(n){
    var pos1= document.getElementById('q'+n);
    
    return pos1.innerHTML;
    
}


function cond(a,b,c,m){
    if(mat(a)==m && mat(b)==m && mat(c)==m){
        return true;
    }    
    else return false;
}

function winner(){
    if(cond(0,1,2,'x') || cond(3,4,5,'x') ||cond(6,7,8,'x') || cond(1,4,7,'x') || cond(0,3,6,'x') || cond(2,5,8,'x') || cond(0,4,8,'x') || cond(6,4,2,'x')){
        alert("x won");
        console.log("x won");
        reset();
    }
    
    else if(cond(0,1,2,'o') || cond(3,4,5,'o') ||cond(6,7,8,'o') || cond(1,4,7,'o') || cond(0,3,6,'o') || cond(2,5,8,'o') || cond(0,4,8,'o') || cond(6,4,2,'o')){
        alert("o won");
        console.log("o won");
        reset();
    }
    else{
        for(var i=0;i<=8;i++){
            if(mat(i)!=""){
                if(i==8){
                    console.log(i,"match draw");
                    alert("match draw!!");
                    reset();
                }
            }
            else
            break;
        }
    }
}



function reset(){
    for(var i=0; i<=8; i++){
        document.getElementById("q"+i).innerHTML="";
    }
}



function c(){
    return false;
}


// function cond(arr[i][j],m){
//     if(arr[0][0]==)
// }

// function winner(){
//     if(arr[0][0])
// }


function data(){
    var k=0;
    var arr=[
        [],[],[]
    ];
    for(var i=0; i<=2; i++){
        for(var j=0; j<=2; j++){
            arr[i][j]= mat(k);
            console.log(i,j,mat(k));
            k++;
        }
    }
}



// function data1(){
//     for(var i=0; i<=8; i++){
//         console.log(mat(i),i);
//     }
// }





// onmouseover=do();
// function do{
//     document.getElementById('q0').innerHTML="c";
// }

// if(mat(0)=="x"){
//     console.log("you nailed it bro");
//     alert("you nailed it");
// }




// var check = document.getElementById('q1');
// onclick = "var.innerHTML='a'";
