var cardnum=[];
var i;
var yournumber;
function getmynum(){
    yournumber=0;
    for(i=1;i<=6;i++){
        cardnum[i]=document.getElementById('card'+i).value;
        cardnum[i] = parseInt(cardnum[i]);
    }
    yournumber=cardnum[1]?yournumber+1:yournumber;
    yournumber=cardnum[2]?yournumber+2:yournumber;
    yournumber=cardnum[3]?yournumber+4:yournumber;
    yournumber=cardnum[4]?yournumber+8:yournumber;
    yournumber=cardnum[5]?yournumber+16:yournumber;
    yournumber=cardnum[6]?yournumber+32:yournumber;
    document.getElementById('resultdiv').style.display='block';
    document.getElementById('yournum').innerHTML=yournumber;
}
function resetall(){
    document.getElementById('resultdiv').style.display='none';
}