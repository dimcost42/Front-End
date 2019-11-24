class Course
{
    list=[];



    constructor (courseName, courseStream, courseType,courseStartDate, courseEndDate)
    {
        this.courseName = courseName;
        this.courseStream = courseStream;
        this.courseType = courseType;
        this.courseStartDate = courseStartDate;
        this.courseEndDate = courseEndDate;
    }
}
    const courseOne = new Course (
        courseName = ("#courseTitle").val(),
        courseStream=("#courseStream").val(),
        courseType=("#courseType").val(),
        courseStartDate=("#courseStartDate").val(),
        courseEndDate=("#courseEndDate").val()
    );

    console.log(courseName, courseStream);


    /*
    class Course
{  
            list=[];

constructor (courseName, courseStream, courseType,courseStartDate, courseEndDate)
{
    this.courseName = courseName;
    this.courseStream = courseStream;
    this.courseType = courseType;
    this.courseStartDate = courseStartDate;
    this.courseEndDate = courseEndDate;
}


 courseOne = new Course 
(
    $("#myCourseForm").submit(function (e) 
    {
        e.preventDefault();
        $("input[courseName = 'courseTitle']").val(),
        $("input[courseStream = 'courseStream']").val(),
        $("input[courseType = 'courseType']").val(),
        $("input[courseStartDate = 'courseStartDate']").val(),
        $("input[courseEndDate = 'courseEndDate']").val();
        console.log(courseName, courseStream);
    }
);
}
        }
    */