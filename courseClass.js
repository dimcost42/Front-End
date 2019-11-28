

    function myFunction() {
      var x = document.getElementById("myCourseForm");
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

    // function updateValue() {
    //   courseTitle = $("#courseTitle").val();
    //   courseStream = $("#courseStream").val();
    //   courseType = $("#courseType").val();
    //   courseStartDate = $("#courseStartDate").val();
    //   courseEndDate = $("#courseEndDate").val();

    //   $("ol").append("<li>", courseTitle, " ", courseStream, " ", courseType, " ", courseStartDate, " ", courseEndDate, "</li>", "<br>");
    // }
   
    updatedBoolean = false;
    courseList = [];
      function updateValue(){
      courseTitle = $("#courseTitle").val();
      courseStream = $("#courseStream").val();
      courseType = $("#courseType").val();
      courseStartDate = $("#courseStartDate").val();
      courseEndDate = $("#courseEndDate").val();

    function CoursesConst(courseTitle, courseStream, courseType, courseStartDate, courseEndDate) {
    this.courseTitle = courseTitle;
    this.courseStream = courseStream;
    this.courseType = courseType;
    this.courseStartDate = courseStartDate;
    this.courseEndDate =courseEndDate;
    }
      
      course1 = new CoursesConst(courseTitle, courseStream, courseType, courseStartDate, courseEndDate);
      courseList.push(course1);
      updatedBoolean = true;

      courseTitle = $("#courseTitle").val("");
         courseStream = $("#courseStream").val("");
         courseType = $("#courseType").val("");
         courseStartDate = $("#courseStartDate").val("");
         courseEndDate = $("#courseEndDate").val("");
    }

    i=0;
    currentPrintingPosition =0;
    function printCourseList()
    {
      if (updatedBoolean === true)
      {
        // $("ol").val("");
      for(i =currentPrintingPosition; i<courseList.length;i++)
      {
        $("ol").append("<br><li>", courseList[i].courseTitle, " ",  courseList[i].courseStream, " ", courseList[i].courseType, " ", courseList[i].courseStartDate, " ", courseList[i].courseEndDate,"</li>");
        currentPrintingPosition = courseList.length;
      }
    }
      updatedBoolean=false; 
    }
    function loadCourseList()
    {
      
        // $("ol").empty();

      for(i=0; i<courseList.length; i++)
      {
        $("ol").append("<br><li>", courseList[i].courseTitle, " ",  courseList[i].courseStream, " ", courseList[i].courseType, " ", courseList[i].courseStartDate, " ", courseList[i].courseEndDate,"</li>");
       
      }
   
    }


    editEnabled = false;
    function courseEdit()
    {
      
        
       i = $("#editCourse").val();
       i=(i-1);
       $("#courseTitle").val(courseList[i].courseTitle);
       $("#courseStream").val(courseList[i].courseStream);
       $("#courseType").val(courseList[i].courseType);
       $("#courseStartDate").val(courseList[i].courseStartDate);
       $("#courseEndDate").val(courseList[i].courseEndDate);
       editEnabled = true;
       
    }
    
    function courseSave()
    {
        currentPrintingPosition=0;
        updatedBoolean=false; 

        //    edo sozei sti sugkekrimeni thesi tou array
           courseList[i].courseTitle = $("#courseTitle").val();
           courseList[i].courseStream = $("#courseStream").val();
           courseList[i].courseType = $("#courseType").val();
           courseList[i].courseStartDate = $("#courseStartDate").val();
           courseList[i].courseEndDate = $("#courseEndDate").val();
    }
    
    function courseDelete()
    {
        i = $("#editCourse").val();
        delete courseList[i];
        //  $("ol").empty();
        
         courseTitle = $("#courseTitle").val("");
         courseStream = $("#courseStream").val("");
         courseType = $("#courseType").val("");
         courseStartDate = $("#courseStartDate").val("");
         courseEndDate = $("#courseEndDate").val("");
    }

    function erase()
    {
        $("ol").empty();  
        courseTitle = $("#courseTitle").val("");
        courseStream = $("#courseStream").val("");
        courseType = $("#courseType").val("");
        courseStartDate = $("#courseStartDate").val("");
        courseEndDate = $("#courseEndDate").val("");
    }