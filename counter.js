const selectupto = document.getElementById('select');
const player1btn = document.getElementById('player1');
const player2btn = document.getElementById('player2');
const player1score = document.getElementById('player1score');
const player2score = document.getElementById('player2score');
const reset = document.getElementById('reset');

let scoreplayer1 = 0;
let scoreplayer2 = 0;
let win = false;
let winningscore;
selectupto.addEventListener('change', function(){
winningscore = parseInt(this.value);
})
player1btn.addEventListener('click', function(){
if(!win){
    scoreplayer1 += 1;
    if(scoreplayer1 === winningscore){
        player1btn.classList.add('green');
        player2btn.classList.add('red');
          win = true;
    }
    player1score.innerText = scoreplayer1;
}
})
player2btn.addEventListener('click', function(){
    if(!win){
        scoreplayer2 += 1;
        if(scoreplayer2 === winningscore){
            player2btn.classList.add('green');
            player1btn.classList.add('red');
              win = true;
        }
        player2score.innerText = scoreplayer2;
    }
    })
    reset.addEventListener('click', function(){
        scoreplayer1 =0;
        scoreplayer2 =0;
        player1score.innerText = scoreplayer1;
        player1score.innerText = scoreplayer1;
        player1btn.classList.remove('green');
        player2btn.classList.remove('red');
        player2btn.classList.remove('green');
        player1btn.classList.remove('red');
               win = false;
    })