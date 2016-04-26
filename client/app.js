var App = (function($, service) {
  var cars = {};
  var _editing = false;

  cars.list = service.getCars();

  function save() {
    if (!_editing) {
      _populate();
      return;
    }

    update();
    return;
  }

  function update() {
    var listings = '';

    cars.list.then(function(list) {
      listings = list;
    }).then(function() {
      _(listings).forEach(function(value, key) {
        if (value.id == $('#car-id').val()) {
          service.updateCar({
            id: $('#car-id').val(),
            name: $('#car-name').val(),
            color: $('#car-color').val(),
            weight: $('#car-weight').val(),
            date_time: Date.now()
          })
          .then(function(result) {
            if (result) {
              Map.mapTable(service.getCars());
              _clear();
              return;
            }
          });
        }
      });
    });
  }

  function rowSelected($row) {
    var id = $row.attr('data-id').replace(/car-/, '');

    cars.list.then(function(list) {
      _.find(list, function(car) {
        if (car.id == id) {
          $('#car-id').val(car.id);
          $('#car-name').val(car.name);
          $('#car-color').val(car.color);
          $('#car-weight').val(car.weight);
        }
      });

      $('#cancel-car').attr('disabled', false);

      _editing = true;
    });
  }

  function reorderWeights(list) {
    return _.orderBy(list, ['weight', 'date_time'], ['asc', 'desc']);
  }

  function cancel() {
    _clear();
  }

  function remove(carObj) {
    var obj = {};
    obj.id = parseInt(carObj.attr('data-id').replace(/delete-/, ''));

    service.removeCar(obj).then(function(result) {
      if (result) {
        Map.mapTable(service.getCars());
        _clear();
        _editing = false;
      }
    });
  }

  function change() {
    $('#save-car').attr('disabled', false);
    $('#cancel-car').attr('disabled', false);
  }

  function filter($filter) {
    if ($filter.val()) {
      Map.mapTable(_filterColor($filter));
    }
    else {
      Map.mapTable(cars.list);
    }
  }

  function _filterColor($filter) {
    return Promise.resolve(
      cars.list.then(function(list) {
        return _.filter(list, ['color', $filter.val()]);
      })
    );
  }

  function _populate() {
    var carObj = {};
    carObj.name = $('#car-name').val();
    carObj.color = $('#car-color').val();
    carObj.weight = $('#car-weight').val();
    carObj.date_time = Date.now();

    service.saveCar(carObj).then(function(result) {
      if (result) {
        Map.mapTable(service.getCars());
        _clear();
        _editing = false;
      }
    });
  }

  function _clear() {
    $('#car-id').val('');
    $('#car-name').val('');
    $('#car-color').val('');
    $('#car-weight').val('');
    $('#save-car').attr('disabled', true);
    $('#cancel-car').attr('disabled', true);
    $('#filter-color').val('');
    _editing = false;
  }

  return {
    list           : Promise.resolve(cars.list),
    save           : save,
    update         : update,
    cancel         : cancel,
    remove         : remove,
    change         : change,
    filter         : filter,
    rowSelected    : rowSelected,
    reorderWeights : reorderWeights
  };
})(jQuery, Service);
