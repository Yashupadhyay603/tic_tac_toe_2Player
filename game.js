var metrix=[['a','b','c'],['d','e','f'],['g','h','i']];

var count=0;
var xWin=0;
var oWin=0;

var heading = document.querySelector("#page-title");
var boxes=document.querySelectorAll(".box")

var start=document.querySelectorAll("button");
var sign='q';

function changeColor(val1,val2,val3){
    document.querySelector(".box"+(val1+1)).style.color="red";
    document.querySelector(".box"+(val2+1)).style.color="red";
    document.querySelector(".box"+(val3+1)).style.color="red";

}

function check(){
    for(var i=0;i<3;i+=1){
        if((metrix[i][1]===metrix[i][2] && metrix[i][0]==metrix[i][1])){
            changeColor(i*3+0,i*3+1,i*3+2);
            return metrix[i][0];
        }
        else if((metrix[1][i]===metrix[2][i] && metrix[0][i]==metrix[1][i])){
            changeColor(i,3+i,6+i);
            return metrix[0][i];
        }
        
    }
    if(metrix[0][0]==metrix[1][1] && metrix[1][1]==metrix[2][2]){
        changeColor(0,4,8)
        return metrix[0][0];
    }
    if(metrix[2][0]==metrix[1][1] && metrix[1][1]==metrix[0][2]){
        changeColor(2,4,6);
        return metrix[1][1];
    }
    return 'n';
}

function updateScore(){
    document.querySelector(".Xscore").innerHTML="Player X Score : " + xWin;
    document.querySelector(".Oscore").innerHTML="Player Y Score : " + oWin;
}

function reset(){
    metrix=[['a','b','c'],['d','e','f'],['g','h','i']];
    for(var i=0;i<boxes.length;i+=1){
        boxes[i].innerHTML="";

    }
    count=0;
    for(var i=0;i<boxes.length;i+=1){
        boxes[i].style.color="#FEF2BF";
    }
   
    

}

function gameOver(){
    var winner=check();
        if(winner==='O'){
            oWin+=1;
            heading.innerHTML="O wins! Choose who to play next round first.";
            // setTimeout(reset(),10000);
            sign='q';
            
        }
        else if(winner==='X'){
            xWin+=1;
            heading.innerHTML="X wins!  Choose who to play next round first.";
            // setTimeout(reset(),10000);
            sign='q';
        }       
        else if(count>=9){
            heading.innerHTML="Draw! Lol, maybe next round will settle the score.";
            // setTimeout(reset(),10000);
            sign='q';
        }
        updateScore();
        
}




for(var i=0;i<start.length;i+=1){
    start[i].addEventListener("click",function(){
        reset();
        if(this.innerHTML=='O'){
            sign='O';
        }
        else{
            sign='X';
        }
    });
}

for(var i=0;i<boxes.length;i+=1){    
    boxes[i].addEventListener("click",function(){
        if(sign==='q'){
            heading.innerHTML="Choose who will start first. X or O";            
        }
        else{
            count++;
            var boxNum=this.className.split(' ')[1][3];
            console.log(boxNum);
            metrix[Math.floor((boxNum-1)/3)][(boxNum-1)%3]=sign;
            this.innerHTML=sign;
            gameOver();        
            if(sign==='X'){
                sign='O';
            }
            else{
                sign='X';
            }
        }   
    })
    
}




