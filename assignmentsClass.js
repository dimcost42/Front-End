

function myFunction() {
    var x = document.getElementById("myAssignmentForm");
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
assignmentList = [];
function updateValue() {



    title = $("#title").val();
    description = $("#description").val();
    subdate = $("#subdate").val();
    oralmark = $("#oralmark").val();
    totalmark = $("#totalmark").val();


    function assignmentsConst(title, description, subdate, oralmark, totalmark) {
        this.title = title;
        this.description = description;
        this.subdate = subdate;
        this.oralmark = oralmark;
        this.totalmark = totalmark;

    }

    assignment1 = new assignmentsConst(title, description, subdate, oralmark, totalmark);
    assignmentList.push(assignment1);
    updatedBoolean = true;
    console.log(assignment1);
    console.log(assignmentList.length);



}


function printassignmentList() {

    $("ol").empty();
    for (i = 0; i < assignmentList.length; i++) {
        $("ol").append("<br><li>", assignmentList[i].title, " ", assignmentList[i].description, " ", assignmentList[i].subdate, " ", assignmentList[i].oralmark, " ", assignmentList[i].totalmark, "</li>");
        currentPrintingPosition = assignmentList.length;
    }
    i = 0;
}




editEnabled = false;
function assignementEdit() {


    i = $("#editAssignments").val();
    i = (i - 1);
    $("#title").val(assignmentList[i].title);
    $("#description").val(assignmentList[i].description);
    $("#subdate").val(assignmentList[i].subdate);
    $("#oralmark").val(assignmentList[i].oralmark);
    $("#totalmark").val(assignmentList[i].totalmark);

    editEnabled = true;
    $("ol").empty();
    printassignmentList();

}

function assignementSave() {
    i = $("#editAssignments").val();
    i = (i - 1);
    assignmentList[i].title = $("#title").val();
    assignmentList[i].description = $("#description").val();
    assignmentList[i].subdate = $("#subdate").val();
    assignmentList[i].oralmark = $("#oralmark").val();
    assignmentList[i].totalmark = $("#totalmark").val();
    $("ol").empty();
    printassignmentList();

}


function assignmentDelete() {
    i = $("#editAssignments").val();
    i = (i - 1);
    assignmentList.splice(i, 1);

    title = $("#title").val("");
    description = $("#description").val("");
    subdate = $("#subdate").val("");
    oralmark = $("#oralmark").val("");
    totalmark = $("#totalmark").val("");

    $("ol").empty();
    printassignmentList();

}

function erase() {
    $("ol").empty();
    title = $("#title").val("");
    description = $("#description").val("");
    subdate = $("#subdate").val("");
    oralmark = $("#oralmark").val("");
    totalmark = $("#totalmark").val("");
}