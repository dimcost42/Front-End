
let i=-1;

if (i>-1)
{
    $("#next").attr('value','next') 
}


function loadJason()
{
    $("#demo").empty();
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
   var myArr = JSON.parse(this.responseText);
   $("#demo").append("<br>",myArr.questions[i].QUESTION,"<br>");
   $("#demo").append("<br> A) ",myArr.questions[i].ANSWERA);
   $("#demo").append("<br> B) ",myArr.questions[i].ANSWERB);
   $("#demo").append("<br> C) ",myArr.questions[i].ANSWERC);
   $("#demo").append("<br> D) ",myArr.questions[i].ANSWERD);
   $("#demo").append("<br> <br>CORRECT ANSWER IS: ",myArr.questions[i].ANSWERCORRECT);
 }
};

if($("#jsonlink").val().length==0){
xmlhttp.open("GET", "https://dimcost42.github.io/Front-End/questionsFoundationCorrectz.json", true);
}
else{
    xmlhttp.open("GET", $("#jsonlink").val(), true);
}
xmlhttp.send();

}

function next()
{
    
    $("#next").html('next');
    i++;
    loadJason();
}
