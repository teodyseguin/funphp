var Service = (function($) {
  function getCars() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: '../api/v1/getCars',
        success: function(data) {
          return data;
        }
      })
    );
  }

  function saveCar(carObj) {
    return Promise.resolve(
      $.ajax({
        type    : 'PUT',
        url     : '../api/v1/saveCar',
        data    : JSON.stringify(carObj),
        success : function(data) {
          return data;
        }
      })
    );
  }

  function updateCar(carObj) {
    return Promise.resolve(
      $.ajax({
        type    : 'PUT',
        url     : '../api/v1/updateCar',
        data    : JSON.stringify(carObj),
        success : function(data) {
          return data;
        }
      })
    );
  }

  function removeCar(carObj) {
    return Promise.resolve(
      $.ajax({
        type    : 'DELETE',
        url     : '../api/v1/removeCar/' + carObj.id,
        success : function(data) {
          return data;
        }
      })
    );
  }

  return {
    getCars   : getCars,
    saveCar   : saveCar,
    updateCar : updateCar,
    removeCar : removeCar
  };
})(jQuery);
