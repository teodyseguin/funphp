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
    var newCarObj = {};

    cars.list.then(function(list) {
      listings = list;
    })
    .then(function() {
      _(listings).forEach(function(value, key) {
        if (value.id == $('#car-id').val()) {
          newCarObj = {
            id: $('#car-id').val(),
            name: $('#car-name').val(),
            color: $('#car-color').val(),
            weight: $('#car-weight').val(),
            sub_weight: $('#car-subweight').val(),
            date_time: Date.now()
          };

          service.updateCar(newCarObj)
          .then(function(result) {
            if (!result) {
              return;
            }
            Map.mapTable(service.getCars());
            _clear();
            return;
          })
          .then(function() {
            cars.list.then(function(list) {
              list[key] = newCarObj;
            });
          })
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
          $('#car-subweight').val(car.sub_weight);
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

  function change($field) {
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

  function _populate() {
    var carObj = {
      name: $('#car-name').val(),
      color: $('#car-color').val(),
      weight: $('#car-weight').val(),
      sub_weight: $('#car-subweight').val(),
      date_time: Date.now()
    };

    service.saveCar(carObj).then(function(result) {
      if (result) {
        Map.mapTable(service.getCars());
        $(document).on('click', '#cars-table tbody tr', {}, function(e) {
          App.rowSelected($(this));
        });
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
    $('#car-subweight').val('');
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
