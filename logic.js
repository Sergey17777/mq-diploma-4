let players = ['x', 'o'];
let activePlayer = 0;
let board;

let winPos = [
  ['0', '0', '1', '1', '2', '2'],
  ['0', '2', '1', '1', '2', '0'],
  ['0', '0', '0', '1', '0', '2'],
  ['1', '0', '1', '1', '1', '2'],
  ['2', '0', '2', '1', '2', '2'],
  ['0', '0', '1', '0', '2', '0'],
  ['0', '1', '1', '1', '2', '1'],
  ['0', '2', '1', '2', '2', '2'],

];



function switchPlayer() {
  activePlayer === 'x' ?(activePlayer= 'o'): (activePlayer = 'x');
}

function startGame () {
//������� ����
board = [
  [ '', '', '' ],
  [ '', '', '' ],
  [ '', '', '' ],
];

//��������� ��������� ������
activePlayer = players[Math.floor(Math.random()*2)];
alert('Active player is: ' + activePlayer);

renderBoard(board);
}

let dataX = [];
let dataO = [];
let stepCount = 0;
function click (row, column) {
  //���������� ������ ������
  board[row][column] = activePlayer;
  switchPlayer();
  //������������ ����
 renderBoard(board);
 stepCount++;
 if (stepCount === 9) {
   alert('�����');
   }
 if (activePlayer === players[0]) {
    dataX.push(row);
    dataX.push(column);
   
  } else if (activePlayer === players[1]) {
    dateO.push(row);
    dateO.push(column);
    }
   console.log(dataX);
   console.log(dataO);
}
//function check() {
  function winGame (array, number) {                 for (let i = 0; i < winPos.length; i++) {
    winArr = winPos[i];
    count = 0;
    if (winArr.indexOf(number) !== -1) {

    }
  }
  for (let i = 0; i < board.length; i++) {            // �������� ���������
    for(let j = 0; j < board[i].length; j++) {
      if (board[i][0] !== '' && i++) {                //[0][0] - [2][0]  �����������
        console.log('[00 - 20]')
      } else if (board[0][j] !== '' && j++) {         // [0][0] - [0][2]  �������������
          console.log('[00 - 02]')
      } else if (board[i][j] !== '' && i++ && j++) {  //[0][0] - [2][2]   ���������
        console.log('[00 - 22]')
      } else if (board[2][j] !== '' && i-- && j++) {  //[2][0] - [0][2]   ���������
        console.log('[20 - 02]')
      } else if (board[1][j] !== '' && j++) {         //[1][0] - [1][2]  �������������
        console.log('[10 - 12]')
      } else if (board[i][1] !== '' && i++) {        //[0][1] - [2][1]  �����������
        console.log('[01 - 21]')
      } else if (board[2][j] !== '' && j++) {       //[2][0] - [2][2]  �������������
         console.log('[20 - 22]')
       } else if (board[i][2] !== '' && i++) {      //[0][2] - [2][2]  �����������
         console.log('[20 - 22]')
       }
    }
  }
console.log('�������')
}
//}
  //for (let i = 0; i < oPlayer.length; i++) {
   // for (let j = 0; j < winPos.length; j++) {
     // for (let k = 0; k < xPlayer.length; k++) {
      //  {if (winPos.length == oPlayer.length) {
      //  return true;
      //

//showWinner(activePlayer);