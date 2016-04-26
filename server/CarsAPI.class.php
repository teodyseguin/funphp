<?php
  require_once 'API.class.php';

  class CarsAPI extends API {
    private $connection = '';

    public function __construct($request) {
      parent::__construct($request);
      $this->connectDB();
    }

    private function connectDB() {
      $this->connection = new mysqli('localhost', 'root', 'root');

      if ($this->connection->connect_error) {
        return die('Connection failed: ' . $this->connection->connect_error);
      }

      if (!mysqli_select_db($this->connection, 'cars')) {
        return die('Could not select database: ' . mysqli_error());
      }
    }

    protected function getCars() {
      $resultArray = array();

      if ($this->method == 'GET') {
        $result = mysqli_query($this->connection, 'SELECT * FROM cars');

        if (!$result) {
          return 'Cannot query cars table';
        }

        while ($row = mysqli_fetch_assoc($result)) {
          $resultArray[] = $row;
        }

        return $resultArray;
      }
      else {
        return 'getCars() is GET method';
      }
    }

    protected function saveCar() {
      if ($this->method == 'PUT') {
        $carObj = json_decode($this->file);
        $insertString = "INSERT INTO cars (name, color, weight, date_time) " .
                        "VALUES ('" . $carObj->name . "', '" . $carObj->color . "', '" . $carObj->weight . "', '" . $carObj->date_time . "')";

        $result = mysqli_query($this->connection, $insertString);

        if (!$result) {
          return FALSE;
        }

        return TRUE;
      }
      else {
        return 'saveCar() is PUT method';
      }
    }

    protected function updateCar() {
      if ($this->method == 'PUT') {
        $carObj = json_decode($this->file);
        $updateString = "UPDATE cars " .
                        "SET name = '" . $carObj->name . "', " .
                        "color = '" . $carObj->color . "', " .
                        "weight = '" . $carObj->weight . "', " .
                        "date_time = '" . $carObj->date_time . "' " .
                        "WHERE id = '" . $carObj->id . "'";

        $result = mysqli_query($this->connection, $updateString);

        if (!$result) {
          return FALSE;
        }

        return TRUE;
      }
      else {
        return 'updateCar() is PUT method';
      }
    }

    protected function removeCar() {
      if ($this->method == 'DELETE') {
        $removeString = "DELETE FROM cars WHERE id = '" . $this->args[0] . "'";

        $result = mysqli_query($this->connection, $removeString);

        if (!$result) {
          return FALSE;
        }

        return TRUE;
      }
      else {
        return 'removeCar() is DELETE method';
      }
    }
  }
?>