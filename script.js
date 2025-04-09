document.getElementById("myBtn").addEventListener("click",() => {
    let input=document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML="You named the cat "+input+"!";
});
function checkAnswers(){
    let score = 0
    if(document.getElementById("a1").checked){
        score ++;
    }
    if(document.getElementById("a2").checked){
        score ++;
    }
    if(document.getElementById("a3").checked){
        score ++;
    }
    if(document.getElementById("a4").checked){
        score ++;
    }
    if(document.getElementById("a5").checked){
        score ++;
    }
    document.getElementById("quizpara").innerHTML="You scored "+score+"/5!";
}
