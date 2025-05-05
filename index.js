var randomnumber_player1=Math.floor(Math.random()*6)+1;
var randomnumber_player2=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").src="assets/images/dice"+randomnumber_player1+".png";
document.querySelector(".img2").src="assets/images/dice"+randomnumber_player2+".png";

var resultText="";
if(randomnumber_player1>randomnumber_player2){
    resultText="🚩 Player 1 Wins!";
}
else if(randomnumber_player2>randomnumber_player1){
    resultText="🚩 Player 2 Wins!";
}
else{
    resultText="It's a Draw";
}
document.querySelector("h1").innerText=resultText;