
// function updateValue() {
//   courseTitle = $("#courseTitle").val();
//   courseStream = $("#courseStream").val();
//   courseType = $("#courseType").val();
//   courseStartDate = $("#courseStartDate").val();
//   courseEndDate = $("#courseEndDate").val();

//   $("ol").append("<li>", courseTitle, " ", courseStream, " ", courseType, " ", courseStartDate, " ", courseEndDate, "</li>", "<br>");
// }

questionsList = [];

function addValue() {
    quizname = $("#quizname").val();
    question = $("#question").val();
    answera = $("#answera").val();
    answerb = $("#answerb").val();
    answerc = $("#answerc").val();
    answerd = $("#answerd").val();
    correctanswer = $("#correctanswer").val();

  function QuestionsConstructor(quizname, question, answera, answerb, answerc, answerd, correctanswer) {
    this.quizname = quizname;
    this.question = question;
    this.answera = answera;
    this.answerb = answerb;
    this.answerc = answerc;
    this.answerd = answerd;
    this.correctanswer = correctanswer;
  }

  js1 = new QuestionsConstructor(quizname, question, answera, answerb, answerc, answerd, correctanswer);
  questionsList.push(js1);
}



function printQuestionList() {
 
    $("ol").empty();

    $("ol").append("{ <br>\"",questionsList[questionsList.length-1].quizname,"\": [");

    for (i = 0; i < questionsList.length; i++) {
        $("ol").append("<br>{<br> \"QUESTION\": \"",  questionsList[i].question,"\",");
        $("ol").append("<br> \"ANSWERA\": \"",  questionsList[i].answera,"\",");
        $("ol").append("<br> \"ANSWERB\": \"",  questionsList[i].answerb,"\",");
        $("ol").append("<br> \"ANSWERC\": \"",  questionsList[i].answerc,"\",");
        $("ol").append("<br> \"ANSWERD\": \"",  questionsList[i].answerd,"\",");
        $("ol").append("<br> \"ANSWERCORRECT\": \"",  questionsList[i].correctanswer,"\"");
     if ((i<questionsList.length-1))
     {
      $("ol").append("<br>},");
    }else{ $("ol").append("<br>}");}
  }
  $("ol").append("<br>]<br>}");
 
}

function erase()
{
    $("ol").empty();
    questionsList=[];

    $("#quizname").val("");
    $("#question").val("");
    $("#answera").val("");
    $("#answerb").val("");
    $("#answerc").val("");
    $("#answerd").val("");
}



