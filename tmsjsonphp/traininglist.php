<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");

$db=mysqli_connect("localhost",
"root",
"",
"tms");

$sql="SELECT * FROM trainings";

//runsql
$result=mysqli_query($db, $sql);

if ($result) {
    $trainings = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $training[] = $row;
    }
    echo json_encode($training);
} else {
    echo json_encode(array("success" => false, "error" =>
    mysqli_error($db)));
}
