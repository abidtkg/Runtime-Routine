var pageHour = new Date().getHours();
var pageMin = new Date().getMinutes();

//change min to decimal
decPageMin = pageMin/100;

//time in dec
timeIn = pageHour + decPageMin;

//counting the day
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

/*main rutine function start
if(day == "Sunday"){
    if(timeIn < 11.25){
        document.getElementById("top-ale").innerText = "No Class Ongoing";
    }else{
        if(timeIn < 12.45){
            document.getElementById("top-ale").innerText = "Web Development";
        }else{
            if(timeIn < 13.25){
                document.getElementById("top-ale").innerText = "Data Communication";
            }else{
                if(timeIn < 14.05){
                    document.getElementById("top-ale").innerText = "Object Oriented Programming";
                }
            }
        }
    }
}else{
    if(day == "Monday"){
        if(timeIn < 11.25){
            document.getElementById("top-ale").innerText = "No Class Ongoing";
    }else{
        if(timeIn < 12.05){
            document.getElementById("top-ale").innerText = "Principal Of Digital Electornics";
        }else{
            if(timeIn < 13.25){
                document.getElementById("top-ale").innerText = "Computer Periferrls";
            }else{
                if(timeIn < 14.05){
                    document.getElementById("top-ale").innerText = "Business & Organization";
                }else{
                    if(timeIn < 14.45){
                        document.getElementById("top-ale").innerText = "Data Stucture & Algorithms";
                        }
                    }
                }
            }   
        }
    }else{
        if(day == "Tuesday"){

        }
    }
}
*/

if(day == "Sunday"){
    document.getElementById("preOne").innerHTML = "Web Development";
    document.getElementById("preTwo").innerHTML = "Data Communication";
    document.getElementById("preThree").innerHTML = "Object Oriented Programming";
    document.getElementById("preFour").innerHTML = "Business & Organization";
    document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
    document.getElementById("classTwoTime").innerHTML = "12:45 pm > 1:25 pm";
    document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
    document.getElementById("forthsub").innerHTML = "4";
}else{
    if(day == "Monday"){
        document.getElementById("preOne").innerHTML = "Principal Of Digital Electornics";
        document.getElementById("preTwo").innerHTML = "Computer Periferrls";
        document.getElementById("preThree").innerHTML = "Business & Organization";
        document.getElementById("preFour").innerHTML = "Data Stucture & Algorithms";
        document.getElementById("classOneTime").innerHTML = "11:25 am > 12:05 pm";
        document.getElementById("classTwoTime").innerHTML = "12:05 pm > 01:25 pm";
        document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
        document.getElementById("classFourTime").innerHTML = "02:05 pm > 02:45 pm";
    }else{
        if(day == "Tuesday"){
            document.getElementById("preOne").innerHTML = "Data Communication";
            document.getElementById("preTwo").innerHTML = "Object Oriented Programming";
            document.getElementById("preThree").innerHTML = "Principal Of Digital Electornics";
            document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
            document.getElementById("classTwoTime").innerHTML = "12:45 pm > 01:25 pm";
            document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:45 pm";
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
                    document.getElementById("classOneTime").innerHTML = "11:25 am > 12:45 pm";
                    document.getElementById("classTwoTime").innerHTML = "12:45 pm > 01:25 pm";
                    document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:45 pm";
                }else{
                    if(day == "Friday"){
                        if(timeIn < 23.59){
                            document.getElementById("top-ale").innerHTML = "Holiday";
                        }
                    }else{
                        if(day == "Saturday"){
                            document.getElementById("preOne").innerHTML = "Principal Of Digital Electornics";
                            document.getElementById("preTwo").innerHTML = "Object Oriented Programming";
                            document.getElementById("preThree").innerHTML = "Data Structure	& Algorithms";
                            document.getElementById("preFour").innerHTML = "Computer Periferrerls";
                            document.getElementById("classOneTime").innerHTML = "11:25 am > 12:05 pm";
                            document.getElementById("classTwoTime").innerHTML = "12:05 pm > 01:25 pm";
                            document.getElementById("classThreeTime").innerHTML = "01:25 pm > 02:05 pm";
                            document.getElementById("classFourTime").innerHTML = "02:05 pm > 02:45 pm";
                            document.getElementById("forthsub").innerHTML = "4";
                        }else{
                            document.getElementById("week").innerHTML = "There is some error";
                        }
                    }
                }
            }
        }
    }
}

document.write(timeIn);