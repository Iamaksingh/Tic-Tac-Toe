let button=document.querySelector("#check");
const heading=document.querySelector("#heading");   //reading the tic tac toe heading
let no_box=document.querySelectorAll(".game_but");  //reading the game boxes
let reset=document.querySelector("#reset")          //reading the reset button
let body=document.querySelector(".main");           //reading whole body
let container=document.querySelector(".container"); //reading game container
let win=document.querySelector(".winner");          //reading winner display
let turn_show=document.querySelector(".turn")       //reading turn shower
let winner=0;                                       //keep track if someone won
let color_mode=1;                                   //keeping track of theme
let draw_checker=0;                                 //draw checker

//changing theme
button.onclick = () => {
    if (color_mode===1){
        color_mode=0;
    }else if( color_mode===0 ){
        color_mode=1;
    }
    if ( color_mode===0 ){ //changed mode 
        heading.style.color = "rgb(46, 40, 54)";
        no_box.forEach(element=>{
            element.style.border="2px solid rgb(46, 40, 54)";
            element.style.color="rgb(46, 40, 54)";
            element.style.background="lavender";
        });
        reset.style.border="2px solid rgb(46, 40, 54)";
        reset.style.color = "rgb(46, 40, 54)";
        reset.style.background="lavender"
        body.style.background="lavender";
        container.style.background="lavender";
        win.style.color="rgb(46, 40, 54)";
        turn_show.style.color="rgb(46, 40, 54)";

    }else if ( color_mode===1){ //default mode
        heading.style.color = "rgb(225, 170, 125)";
        no_box.forEach(element=>{
            element.style.border="2px solid rgb(225, 170, 125)";
            element.style.color="rgb(225, 170, 125)";
            element.style.background="rgb(46, 40, 54)";
        });
        reset.style.border="2px solid rgb(225, 170, 125)";
        reset.style.color = "rgb(225, 170, 125)";
        reset.style.background="rgb(46, 40, 54)";
        body.style.background="rgb(46, 40, 54)";
        container.style.background="rgb(46, 40, 54)";
        win.style.color="rgb(225, 170, 125)";
        turn_show.style.color="rgb(225, 170, 125)";
    }   
};

//storing winning patterns
const win_seq = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; 
//check winner 
const checkwinner =()=>{
    for ( let i of win_seq ){
        let val1 = no_box[i[0]].innerText;
        let val2 = no_box[i[1]].innerText;
        let val3 = no_box[i[2]].innerText;
        if ( val1!="" && val2!="" && val3!="" ){
            if ( val1===val2 && val2===val3 ){
                //disable boxes after winning
                for(let box of no_box){
                    box.disabled=true;
                }
                win.innerHTML=`<h1>Winner is ${val1}</h1>`;
                win.style.visibility="visible";
                winner=1;
            }   
            if ( draw_checker==9 && winner===0 ){
                win.innerHTML="<h1>Draw!</h1>";
                win.style.visibility="visible";
            }
        }
    }
};

//player turn tracker 
var turn_player=0;

//function to play
no_box.forEach( (i) => {
    i.addEventListener("click",()=>{
        if ( turn_player===0 ){
            i.innerText="X";
            turn_player = 1;
            turn_show.innerHTML="<h1>Turn -> O</h1>";
            turn_show.style.visibility="visible";
        }else{
            i.innerText="O";
            turn_player = 0;
            turn_show.innerHTML="<h1>Turn -> X<h1>";
            turn_show.style.visibility="visible";
        }
        i.disabled=true;
        draw_checker++;
        checkwinner();
    })
});

//reset button functionality
reset.addEventListener( "click",()=>{
    no_box.forEach( i =>{
        i.disabled=false;
        i.innerText="";
    })
    draw_checker=0;
    winner=0;
    win.innerHTML="<h1>Lets Play!</h1>";
    turn_show.innerHTML="<h1>Turn -> X </h1>";
    turn_player=0;
});
