

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
      assignmentList= [];
        function updateValue(){
            
           
            
            title = $("#title").val();
            description = $("#description").val();
            subdate = $("#subdate").val();
            oralmark = $("#oralmark").val();
            totalmark = $("#totalmark").val();
       
  
      function assignmentsConst (title, description, subdate, oralmark, totalmark) {
      this.title=title;
      this.description = description;
      this.subdate  =subdate ;
      this.oralmark  = oralmark ;
      this.totalmark  = totalmark ;
      
      }
        
        assignment1 = new assignmentsConst(title, description, subdate, oralmark, totalmark);
        assignmentList.push(assignment1);
        updatedBoolean = true;
      console.log(assignment1);
      console.log(assignmentList.length);

            title = $("#title").val("");
          description = $("#description").val("");
          subdate = $("#subdate").val("");
          oralmark = $("#oralmark").val("");
          totalmark = $("#totalmark").val("");
      
    }
  
      i=0;
      currentPrintingPosition =0;
      function printassignmentList()
      {
        if (updatedBoolean === true)
        {
          // $("ol").val("");
        for(i =currentPrintingPosition; i<assignmentList.length;i++)
        {
          $("ol").append("<br><li>", assignmentList[i].title, " ",  assignmentList[i].description,  " ", assignmentList[i].subdate , " ", assignmentList[i].oralmark, " ", assignmentList[i].totalmark,"</li>");
          currentPrintingPosition = assignmentList.length;
        }
      }
        updatedBoolean=false; 
      }
     
  
  
      editEnabled = false;
      function assignementEdit()
      {
        
          
         i = $("#editAssignments").val();
         i=(i-1);
         $("#title").val(assignmentList[i].title);
         $("#description").val(assignmentList[i].description);
         $("#subdate").val(assignmentList[i].subdate);
         $("#oralmark").val(assignmentList[i].oralmark);
         $("#totalmark").val(assignmentList[i].totalmark);
         
         editEnabled = true;
         
      }
      
   
      
      function assignmentDelete()
      {
          i = $("#editAssignments").val();
          delete assignmentList[i];
          //  $("ol").empty();
          
          title = $("#title").val("");
          description = $("#description").val("");
          subdate = $("#subdate").val("");
          oralmark = $("#oralmark").val("");
          totalmark = $("#totalmark").val("");
      }
  
      function erase()
      {
          $("ol").empty();  
          title = $("#title").val("");
          description = $("#description").val("");
          subdate = $("#subdate").val("");
          oralmark = $("#oralmark").val("");
          totalmark = $("#totalmark").val("");
      }