let StartDir = {x:0,y:0};
let speed = 5;//we have to increase the speed as othe time increases
let lastpaintTime = 0;
let snakemove= [
    {x:8,y:4}
]
let food1 = {x:2,y:6};
let food2 = {x:11,y:8};
let food3 = {x:9,y:9};
let food4 = {x:15,y:10};



let color1 = {x:1,y:4};
let color2 = {x:2,y:4};
let color3 = {x:3,y:4};
let color4 = {x:4,y:4};

let hiscoreval = 0;

let score = 0 ;
let  countdown = 120  ;




let textLocation1 = {x :randomNo() , y: randomNo()};
let textLocation2=  {x :randomNo() , y: randomNo()};
let textLocation3=  {x :randomNo() , y: randomNo()};
let textLocation4=  {x :randomNo() , y: randomNo()};

let textcontainer   =['WORD' ,'NITT' ,'LION' ,'FOUR' ,'CAGE' ,'CODE' ,'BALL' ,'OPAL','BARN' ];







//game functions 
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastpaintTime)/1000< 1/speed){
        return ;
    }
    lastpaintTime =ctime ; 
    gameEngine();


    
}
function gameEngine(){
    //part 1 : will upate the food and snake position 
    //how? by making the snkae as an arr we can aadd up the position of the snake to the arr
    // as an element thereby it it will change its position continnuosly 
    if(isCollide(snakemove)){
        StartDir={x:0, y:0} ;//place the snake in the starting position
        alert("Game Over .kindly press any key to  play Again");
        snakemove = [{x:8,y : 4}];
        score = 0 ;
    
    }

  

    if(snakemove[0].x===food1.x && snakemove[0].y===food1.y ){
        soundplay('foodEat.mp3') ;
        
        score = score + 10; 
        if(hiscoreval<score){
            hiscoreval = score ;
            localStorage.setItem('hiscore' ,JSON.stringify(hiscoreval))

        }
        scoreboard.innerHTML = 'score :'+ score ;

        snakemove.unshift({x: snakemove[0].x+ StartDir.x  ,y: snakemove[0].y + StartDir.y})
        let a=2 ;
        let b=16 ;
        food1= {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;

    }

        
    else if (snakemove[0].x===food2.x && snakemove[0].y===food2.y ){
        soundplay('foodEat.mp3') ;
        score = score + 10; 
        if(hiscoreval<score){
            hiscoreval = score ;
            localStorage.setItem('hiscore' ,JSON.stringify(hiscoreval))

        }
        scoreboard.innerHTML = 'score :'+ score ;

        snakemove.unshift({x: snakemove[0].x+ StartDir.x  ,y: snakemove[0].y + StartDir.y})
        let a=3;
        let b=15 ;
        food2= {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
      
    }
    else if (snakemove[0].x===food3.x && snakemove[0].y===food3.y ){
        soundplay('foodEat.mp3') ;
        score = score + 10; 
            if(hiscoreval<score){
                hiscoreval = score ;
                localStorage.setItem('hiscore' ,JSON.stringify(hiscoreval))
    
            }
            scoreboard.innerHTML = 'score :'+ score ;
    
            snakemove.unshift({x: snakemove[0].x+ StartDir.x  ,y: snakemove[0].y + StartDir.y})
            let a=3;
            let b=15 ;
            food3= {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
            
        }
    else if (snakemove[0].x===food4.x && snakemove[0].y===food4.y ){
        soundplay('foodEat.mp3') ;       
        score = score + 10; 
                if(hiscoreval<score){
                    hiscoreval = score ;
                    localStorage.setItem('hiscore' ,JSON.stringify(hiscoreval))
        
                }
                scoreboard.innerHTML = 'score :'+ score ;
        
                snakemove.unshift({x: snakemove[0].x+ StartDir.x  ,y: snakemove[0].y + StartDir.y})
                let a=3;
                let b=15 ;
                food4= {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
                
            }
       
  /* if (snakemove[0].x === textLocation1.x && snakemove[0].y === textLocation1.y){
                document.getElementById('text1').innerHTML= ''; 
                return true ;  
                         
                }
    if (snakemove[0].x === textLocation2.x && snakemove[0].y === textLocation2.y){
                document.getElementById('text2').innerHTML= ''; 
                return true ;  

                }
    if (snakemove[0].x === textLocation3.x && snakemove[0].y === textLocation3.y){
                document.getElementById('text3').innerHTML= ''; 
                return true ;  

                }
    if (snakemove[0].x === textLocation4.x && snakemove[0].y === textLocation4.y){
                document.getElementById('text4').innerHTML= ''; 
                return true ;  

                }
       
    */
    for (let i = snakemove.length-2; i >=0 ; i--) {
        snakemove[i+1] = {...snakemove[i]} ;
        
    }
    snakemove[0].x += StartDir.x ;
    snakemove[0].y += StartDir.y ;
    
    
    gameboard.innerHTML = "";
    snakemove.forEach((e,index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index===0){
        snakeElement.classList.add('head')
    }
    else{
        snakeElement.classList.add('snake')
    }
    gameboard.appendChild(snakeElement);

    }
    );

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food1.y;
    foodElement.style.gridColumnStart = food1.x;
    foodElement.classList.add('food1')
    gameboard.appendChild(foodElement);


    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food2.y;
    foodElement.style.gridColumnStart = food2.x;
    foodElement.classList.add('food2')
    gameboard.appendChild(foodElement);

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food3.y;
    foodElement.style.gridColumnStart = food3.x;
    foodElement.classList.add('food3')
    gameboard.appendChild(foodElement);

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food4.y;
    foodElement.style.gridColumnStart = food4.x;
    foodElement.classList.add('food4')
    gameboard.appendChild(foodElement);

    wordvisible() ; 

}    

    
function isCollide() {
            //when snake bite itself a part 
    for (let i = 1 ; i < snakemove.length; i++) {
        if((snakemove[0].x === snakemove[i].x ) && (snakemove[0].y === snakemove[i].y )){
            return true ;
        }
        
    }
    //when the snake colides with the wall    
    if(snakemove[0].x >= 18 || snakemove[0].x <=0 || snakemove[0].y >= 18||snakemove[0].y <= 0){
        return true ;
    }
}




//to generate random X and Y 
function randomNo(){
   // No = math.round(a + (b-a)*Math.random())
   //this basically generates raandomnos between A and B
   let a=2 ;
   let b= 16 ;
   
   No = Math.round(a + (b-a)*Math.random());
   return No ;
}
function randomIndex(arrname){
    a= 0 ;
    b =arrname.length;
    index = Math.round(a+(b-a)*Math.random());
    return index ; 
}


function soundplay(audioName){
    let audio  = new Audio(audioName);
    audio.play();
} 
let timerElement =document.getElementsByClassName('timerclock')[0] ;

function updateTimer() {
    var minutes  = Math.floor( countdown / 60 );
    var seconds = countdown % 60  ;
    timerElement.innerHTML  = minutes +':'+ (seconds< 10 ? '0' : '' ) +seconds ; //using ternary operator to verify if the secs are less than 10 put a 0 in front of it or else not
    countdown --  ;//decreasing the countdown by one 
    if (countdown < 0 ){
        clearInterval(timer) ;
        alert('TIMES UP')//this function clear the timer function as the time gets over so it prvents the function from calling it again 
        StartDir={x:0, y:0} ;
        snakemove = [{x:8,y : 4}];
        score = 0 ;
        
    }
}
function wordvisible(){
      
  
                textElement1 = document.createElement('div');
                textElement1.style.gridRowStart = textLocation1.y;
                textElement1.style.gridColumnStart = textLocation1.x;
                textElement1.textContent = textArr[0]
                textElement1.setAttribute('id','text1');
                gameboard.appendChild(textElement1);



                textElement2 = document.createElement('div');
                textElement2.style.gridRowStart = textLocation2.y;
                textElement2.style.gridColumnStart = textLocation2.x;
                textElement2.textContent = textArr[1]
                textElement2.setAttribute('id','text2');
                gameboard.appendChild(textElement2);



                textElement3 = document.createElement('div');
                textElement3.style.gridRowStart = textLocation3.y;
                textElement3.style.gridColumnStart = textLocation3.x;
                textElement3.textContent = textArr[2];
                textElement3.setAttribute('id','text3');
                gameboard.appendChild(textElement3);



                textElement4 = document.createElement('div');
                textElement4.style.gridRowStart = textLocation4.y;
                textElement4.style.gridColumnStart = textLocation4.x;
                textElement4.textContent = textArr[3]   ;
                textElement4.setAttribute('id','text4');
                gameboard.appendChild(textElement4);
    }

    
//regenerate the food and scoresup 

//moving the snake the logic we are shifting the each blocks towards it front so the snake appears to be moving continuosly
//for that we are iterating the whole snake arr



//main part

  

let hiscore  =localStorage.getItem('hiscore');
if (hiscore===null){
    hiscoreval= 0 ;
    localStorage.setItem('hiscore',JSON.stringify(hiscoreval)) 
}else {
    hiscoreval = JSON.parse(hiscore);
    highscorebox.innerHTML ='HI SCORE :'+ hiscore;
}
var timer = setInterval(updateTimer,1000 ) ;//1000in milliseconds it means calling this function after every second  


window.requestAnimationFrame(main);
text = textcontainer[randomIndex(textcontainer)] ;
textArr = text.split('') ;
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    var timer = setInterval(updateTimer,1000 ) ;
    StartDir ={x:0 ,y:1} //start the game 
    switch(e.key){
    case"ArrowUp":
        console.log("ArrowUp")
        StartDir.x = 0;//as the inputdir is an object we can acess its value by dot notation
        StartDir.y= -1;
        break;
    case"ArrowDown":
        console.log("ArrowDown")
        StartDir.x = 0;
        StartDir.y= 1;
        break;
    case"ArrowRight":
        console.log("ArrowRight")
        StartDir.x = 1 ;
        StartDir.y= 0;
        break;
    case"ArrowLeft":
        console.log("ArrowLeft")
        StartDir.x = -1;
        StartDir.y= 0;
        break;
    default:
        break;
    
    }
})
