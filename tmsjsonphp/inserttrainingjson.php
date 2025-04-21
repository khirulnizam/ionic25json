<?php
//filename : inserttrainingjson.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With");

//json data form
$_POST = json_decode(file_get_contents('php://input'), true);


//dummy json
/*$_POST=json_decode('{
    "id": "f8",
    "trainingname": "Flutter Advanced",
    "contact": "0129034614",
    "description": "Advance Flutter"
}', true); */

$id=$_POST['id'];
$trainingname=$_POST['trainingname'];
$contact=$_POST['contact'];
$description=$_POST['description'];

$sql ="INSERT INTO trainings 
        (id, trainingname, contact, description) 
        VALUES ( '$id', '$trainingname', 
        '$contact', '$description')";

//connect to DB
$db=mysqli_connect("localhost","root","", "tms");

//submit data to sql server
$rs=mysqli_query($db, $sql);

//checking if data insert to db successfull
if($rs==true){
    echo '{"success":1}';//success
    //echo $sql;
}else{
    echo '{"success":0}';//failed
    //echo $sql;
    //echo mysqli_error($db );
}
?>