var Map = (function($, App) {
  function mapTable(carList) {
    var rows = '';

    if (carList) {
      carList.then(function(list) {
        var listing = _.orderBy(list, ['weight', 'date_time'], ['asc', 'desc']);

        _(listing).forEach(function(car) {
          rows += '<tr data-id="car-'+car.id+'">' +
            '<td>' + car.id + '</td>' +
            '<td><i class="fa fa-car"></i>' + car.name + '</td>' +
            '<td class="' + car.color + '">' + car.color + '</td>' +
            '<td>' + car.weight + '</td>' +
            '<td>' + new Date(parseInt(car.date_time)) + '</td>' +
            '<td><a href="#" class="delete" data-id="delete-'+ car.id +'">delete</a></td>' +
            '</tr>';
        });

        $('#cars-table tbody').html(rows);

        // clearing this variable because on update, we'll need to override the previous records
        rows = '';

        return;
      });
    }

    App.list.then(function(list) {
      var listing = _.orderBy(list, ['weight', 'date_time'], ['asc', 'desc']);
      _(listing).forEach(function(car) {
        rows += '<tr data-id="car-'+car.id+'">' +
          '<td>' + car.id + '</td>' +
          '<td><i class="fa fa-car"></i>' + car.name + '</td>' +
          '<td class="' + car.color + '">' + car.color + '</td>' +
          '<td>' + car.weight + '</td>' +
          '<td>' + new Date(parseInt(car.date_time)) + '</td>' +
          '<td><a href="#" class="delete" data-id="delete-'+ car.id +'">delete</a></td>' +
          '</tr>';
      });

      $('#cars-table tbody').html(rows);

      // clearing this variable because on update, we'll need to override the previous records
      rows = '';

      _incrementLastWeight();

      return;
    });
  }

  function mapWeights() {
    var weightOptions = '';
    var counter = 1;

    App.list.then(function(list) {
      if (list.length) {
        _(list).forEach(function(car) {
          var w = counter < 10 ? '0' + counter : counter;
          weightOptions += '<option value="' + w + '">' + w + '</option>';
          counter++;
        });

        weightOptions = '<option value="">-- Set Car Weight --</option>' + weightOptions;
      }
      else {
        weightOptions = '<option value="">-- Set Car Weight --</option>' + weightOptions;
      }

      $('#car-weight').html(weightOptions);

      _incrementLastWeight();
    });
  }

  function initMapping() {
    mapTable();
    mapWeights();
  }

  function _incrementLastWeight() {
    var l = $('#car-weight option').length;

    if (l == 1) {
      $('#car-weight').append('<option value="01">01</option>');
    }
    else {
      var w = l < 10 ? '0' + l : l;
      $('#car-weight').append('<option value="' + w + '">' + w + '</option>');
    }
  }

  return {
    initMapping : initMapping,
    mapTable    : mapTable,
    mapWeights  : mapWeights
  };
})(jQuery, App);
