<!-- php main subjects variables are goes here -->
<?php
  //subject variables
  $subPerif = "Computer Periferrls";
  $subWebDev = "Web Development";
  $subDigiElec = "Principal Of Digital Electornics";
  $subBiznes = "Business & Organization";
  $subDatCom = "Data Communication";
  $subOop = "Object Oriented Programming";
  $subDnA = "Data Stucture & Algorithms";

  //get time function goes here
  $timeArrey = getDate();
  print_r($timeArrey);

  //time variables
  $getWeek = $timeArrey["weekday"]; // thiis code shows week name from the time $timeArrey
  $getWeekNum = $timeArrey["wday"]; // this code shows week number from the the $timeArrey week start from 0=sunday
  $getMonth = $timeArrey["month"]; //this code will shows current month in name from the $timeArrey
  $getDate = $timeArrey["mon"]; // this code shows current month number from the $timeArrey
  $getYear = $timeArrey["year"]; // this code shows current full year in numebr from $timeArrey
  $getHour = $timeArrey["hours"]; // this code will show current hour from the $timeArrey
  $getMin = $timeArrey["minutes"]; // this code will show current min fron the $timeArrey
  $getSec = $timeArrey["seconds"]; // this code will show current second fron the $timeArrey
 ?>
<!-- php main functions -->



<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Runtime Rutine (PHP 1.0.0)</title>
  </head>
  <body>
    <div class="">
      <table border="1px;">
        <tr>
          <th colspan="3"><?php echo $getWeek, " ", $getMonth; ?></th>
        </tr>
        <?php
        if ($getWeekNum == 0) {
        echo "string<tr>";
        echo  "<td>1</td>";

          echo "<td>$subDigiElec</td>";
          echo "<td>11:25 am > 12:05 pm</td>";
          echo "</tr>";
          echo "<tr>";
            echo "<td>2</td>";
            echo "<td>$subOop</td>";
            echo "<td>11:25 am > 12:05 pm</td>";
          echo "</tr>";
          echo "<tr>";
            echo "<td>3</td>";
            echo "<td>$subDnA</td>";
            echo "<td>01:25 pm > 02:05 pm</td>";
          echo "</tr>";
          echo "<tr>";
            echo "<td>4</td>";
            echo "<td>$subPerif</td>";
            echo "<td>02:05 pm > 02:45 pm</td>";
          echo "</tr>";
        }else {
          if ($getWeekNum == 1) {
            echo "<tr>";
            echo "<td>Working well</td>";
            echo "</tr>";
          }
        }
         ?>
      </table>
    </div>
  </body>
</html>
