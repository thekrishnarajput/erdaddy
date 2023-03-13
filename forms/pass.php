<?php
$password = getenv('TOKEN');
$response = array('password' => $password);
echo json_encode($response);
