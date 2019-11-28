

function myFunction() {
  var x = document.getElementById("myStudentForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myLoadHide() {
  var x = document.getElementById("load");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

updatedBoolean = false;
studentList = [];
function updateValue() {
  studentName = $("#studentName").val();
  lastName = $("#lastName").val();
  dateOfBirth = $("#dateOfBirth").val();
  tuitionFees = $("#tuitionFees").val();


  function studentsConst(studentName, lastName, dateOfBirth, tuitionFees) {
    this.studentName = studentName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.tuitionFees = tuitionFees;

  }

  student1 = new studentsConst(studentName, lastName, dateOfBirth, tuitionFees);
  studentList.push(student1);
  updatedBoolean = true;
  console.log(student1);
  console.log(studentList.length);

}


function printStudentList() {

  $("ol").empty();
  for (i = 0; i < studentList.length; i++) {
    $("ol").append("<br><li>", studentList[i].studentName, " ", studentList[i].lastName, " ", studentList[i].dateOfBirth, " ", studentList[i].tuitionFees, "</li>");
    currentPrintingPosition = studentList.length;
  }
  i = 0;
}




editEnabled = false;
function studentEdit() {


  i = $("#editStudent").val();
  i = (i - 1);
  $("#studentName").val(studentList[i].studentName);
  $("#lastName").val(studentList[i].lastName);
  $("#dateOfBirth").val(studentList[i].dateOfBirth);
  $("#tuitionFees").val(studentList[i].tuitionFees);

  editEnabled = true;


}

function studentSave() {
  i = $("#editStudent").val();
  i = (i - 1);
  // currentPrintingPosition=0;
  // updatedBoolean=false; 

  //    edo sozei sti sugkekrimeni thesi tou array
  studentList[i].studentName = $("#studentName").val();
  studentList[i].lastName = $("#lastName").val();
  studentList[i].dateOfBirth = $("#dateOfBirth").val();
  studentList[i].tuitionFees = $("#tuitionFees").val();


  $("ol").empty();
  printStudentList();
}



function studentDelete() {
  i = $("#editStudent").val();
  i = (i - 1);
  studentList.splice(i, 1);


  studentName = $("#studentName").val("");
  lastName = $("#lastName").val("");
  dateOfBirth = $("#dateOfBirth").val("");
  tuitionFees = $("#tuitionFees").val("");
  $("ol").empty();
  printStudentList();
}

function erase() {
  $("ol").empty();
  studentName = $("#studentName").val("");
  lastName = $("#lastName").val("");
  dateOfBirth = $("#dateOfBirth").val("");
  tuitionFees = $("#tuitionFees").val("");
}