var day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wednesday";
    break;
    case 4:
        day = "Thursday";
    break;
    case 5:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
        break;
}
document.getElementById("theDay").innerHTML = "(" + day +")"
document.getElementById("week").innerHTML= day + " Class Rutine is";

if(day == "Sunday"){
    document.getElementById("preOne").innerHTML = "Web Development";
    document.getElementById("preTwo").innerHTML = "Data Communication";
    document.getElementById("preThree").innerHTML = "Object Oriented Programming";
    document.getElementById("preFour").innerHTML = "Business & Organization";
    document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
    document.getElementById("classTwoTime").innerHTML = "12:45 pm > 10:25 pm";
    document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
}else{
    if(day == "Monday"){
        document.getElementById("preOne").innerHTML = "Principal Of Digital Electornics";
        document.getElementById("preTwo").innerHTML = "Computer Periferrls";
        document.getElementById("preThree").innerHTML = "Business & Organization";
        document.getElementById("preFour").innerHTML = "Data Stucture & Algorithms";
    }else{
        if(day == "Tuesday"){
            document.getElementById("preOne").innerHTML = "Data Communication";
            document.getElementById("preTwo").innerHTML = "Object Oriented Programming";
            document.getElementById("preThree").innerHTML = "Principal Of Digital Electornics";
        }else{
            if(day == "Wednesday"){
                document.getElementById("preOne").innerHTML = "Web Development";
                document.getElementById("preTwo").innerHTML = "Data Communication";
                document.getElementById("preThree").innerHTML = "Computer Periferrerls";
                document.getElementById("classOneTime").innerHTML = "11:25 am > 12:00 pm";
                document.getElementById("classTwoTime").innerHTML = "12:00 pm > 12:40 pm";
                document.getElementById("classThreeTime").innerHTML = "12:40 pm > 01:20 pm";
            }else{
                if(day == "Thursday"){
                    document.getElementById("preOne").innerHTML = "Data Communication";
                    document.getElementById("preTwo").innerHTML = "Principal Of Digital Electornics";
                    document.getElementById("preThree").innerHTML = "Data Communication";
                }else{
                    if(day == "Friday"){
                        document.getElementById("preOne").innerHTML = "Holiday";
                        document.getElementById("preTwo").innerHTML = "Holiday";
                        document.getElementById("preThree").innerHTML = "Holiday";
                        document.getElementById("preFour").innerHTML = "Holiday";
                    }else{
                        if(day == "Saturday"){
                            document.getElementById("preOne").innerHTML = "Principal Of Digital Electornics";
                            document.getElementById("preTwo").innerHTML = "Object Oriented Programming";
                            document.getElementById("preThree").innerHTML = "Data Structure	& Algorithms";
                            document.getElementById("preFour").innerHTML = "Computer Periferrerls";
                        }
                    }
                }
            }
        }
    }
}
