function time(){
    var pageHour = new Date().getHours();
    var pageMin = new Date().getMinutes();
    var pageSec = new Date().getSeconds();

    document.getElementById("pageHour").innerHTML = pageHour;
    document.getElementById("pageMin").innerHTML = pageMin;
    document.getElementById("pageSec").innerHTML = pageSec;

    if(pageHour > 11){
        document.getElementById("amPm").innerHTML = "pm";
    }else{
        document.getElementById("amPm").innerHTML = "am";
    }

    setTimeout(time, 1000);
}
time();

var pageDate;
pageDate =  new Date().getDate();
document.getElementById("pageDate").innerHTML = pageDate;

var pageMonth;
switch(new Date().getMonth()){
    case 0:
        pageMonth = "January";
    break;
    case 1:
        pageMonth ="February";
    break;
    case 2:
        pageMonth ="March";
    break;
    case 3:
        pageMonth = "April";
    break;
    case 4:
        pageMonth = "May";
    break;
    case 5:
        pageMonth = "June";
    break;
    case 6:
        pageMonth = "July";
    break;
    case 7:
        pageMonth = "Augast";
    break;
    case 8:
        pageMonth = "September";
    break;
    case 9:
        pageMonth = "October";
    break;
    case 10:
        pageMonth = "November";
    break;
    case 11:
        pageMonth = "December";
    break;
}
document.getElementById("pageMonth").innerHTML = pageMonth;

var pageYearX;
pageYearX = new Date().getFullYear();
document.getElementById("pageYear").innerHTML = pageYearX;
