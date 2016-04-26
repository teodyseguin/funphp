<?php
  require_once '../../server/CarsAPI.class.php';

  if (!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
  }

  try {
    $CarsAPI = new CarsAPI($_REQUEST['request'], $_SERVER['HTTP_ORIGIN']);
    echo $CarsAPI->processAPI();
  }
  catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
  }
?>

