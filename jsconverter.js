
// function updateValue() {
//   courseTitle = $("#courseTitle").val();
//   courseStream = $("#courseStream").val();
//   courseType = $("#courseType").val();
//   courseStartDate = $("#courseStartDate").val();
//   courseEndDate = $("#courseEndDate").val();

//   $("#jsonarea").append("<li>", courseTitle, " ", courseStream, " ", courseType, " ", courseStartDate, " ", courseEndDate, "</li>", "<br>");
// }

questionsList = [];

function addValue() {
    quizname = $("#quizname").val();
    question = $("#question").val();
    question = question.split('"').join('\\"');
    answera = $("#answera").val();
    answera = answera.split('"').join('\\"');
    answerb = $("#answerb").val();
    answerb = answerb.split('"').join('\\"');
    answerc = $("#answerc").val();
    answerc = answerc.split('"').join('\\"');
    answerd = $("#answerd").val();
    answerd = answerd.split('"').join('\\"');
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
  printQuestionList();
  cleanFields();
}



function printQuestionList() {
 
    $("#jsonarea").empty();

    $("#jsonarea").append("{\"","questions","\":[");
    // $("#jsonarea").append("{\"",questionsList[questionsList.length-1].quizname,"\":[");
    for (i = 0; i < questionsList.length; i++) {
        $("#jsonarea").append("{\"QUESTION\":\"",  questionsList[i].question,"\",");
        $("#jsonarea").append("\"ANSWERA\":\"",  questionsList[i].answera,"\",");
        $("#jsonarea").append("\"ANSWERB\":\"",  questionsList[i].answerb,"\",");
        $("#jsonarea").append("\"ANSWERC\":\"",  questionsList[i].answerc,"\",");
        $("#jsonarea").append("\"ANSWERD\":\"",  questionsList[i].answerd,"\",");
        $("#jsonarea").append("\"ANSWERCORRECT\":\"",  questionsList[i].correctanswer,"\"");
     if ((i<questionsList.length-1))
     {
      $("#jsonarea").append("},");
    }else{ $("#jsonarea").append("}");}
  }
  $("#jsonarea").append("]}");
  cleanFields();
}

/*
function printQuestionList() {
 
    $("#jsonarea").empty();

    $("#jsonarea").append("{ <br>\"",questionsList[questionsList.length-1].quizname,"\": [");

    for (i = 0; i < questionsList.length; i++) {
        $("#jsonarea").append("<br>{<br> \"QUESTION\": \"",  questionsList[i].question,"\",");
        $("#jsonarea").append("<br> \"ANSWERA\": \"",  questionsList[i].answera,"\",");
        $("#jsonarea").append("<br> \"ANSWERB\": \"",  questionsList[i].answerb,"\",");
        $("#jsonarea").append("<br> \"ANSWERC\": \"",  questionsList[i].answerc,"\",");
        $("#jsonarea").append("<br> \"ANSWERD\": \"",  questionsList[i].answerd,"\",");
        $("#jsonarea").append("<br> \"ANSWERCORRECT\": \"",  questionsList[i].correctanswer,"\"");
     if ((i<questionsList.length-1))
     {
      $("#jsonarea").append("<br>},");
    }else{ $("#jsonarea").append("<br>}");}
  }
  $("#jsonarea").append("<br>]<br>}");
  cleanFields();
}
*/

function undo()
{
  if (confirm("Are you sure you want to undo?")){
  questionsList.splice(questionsList.length-1, 1);
  printQuestionList();
  cleanFields();
}
}

function erase()
{
  if (confirm("Are you sure you want to erase everything?")){
    $("#jsonarea").empty();
    questionsList=[];
    cleanFields();
  }
}

function cleanFields()
{
  
  $("#question").val("");
  $("#answera").val("");
  $("#answerb").val("");
  $("#answerc").val("");
  $("#answerd").val("");
}


function CopyToClipboard(containerid) {
  if (confirm("Are you sure you want to copy this jason format?")){
  if (window.getSelection) {
      if (window.getSelection().empty) { // Chrome
          window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) { // Firefox
          window.getSelection().removeAllRanges();
      }
  } else if (document.selection) { // IE?
      document.selection.empty();
  }

  if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
  }
}
}