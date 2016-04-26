var Map = (function($, App) {
  function mapTable(carList) {
    var rows = '';

    if (carList) {
      carList.then(function(list) {
        var listing = _.orderBy(list, ['weight', 'date_time'], ['asc', 'desc']);

        _(listing).forEach(function(car) {
          rows += '<tr data-id="car-'+car.id+'">' +
            '<td>' + car.id + '</td>' +
            '<td>' + car.name + '</td>' +
            '<td>' + car.color + '</td>' +
            '<td>' + car.weight + '</td>' +
            '<td>' + new Date(parseInt(car.date_time)) + '</td>' +
            '<td><a href="#" class="delete" data-id="delete-'+ car.id +'">x</a></td>' +
            '</tr>';
        });

        $('#cars-table tbody').html(rows);

        // clearing this variable here as well
        rows = '';

        return;
      });
    }

    App.list.then(function(list) {
      var listing = _.orderBy(list, ['weight', 'date_time'], ['asc', 'desc']);
      _(listing).forEach(function(car) {
        rows += '<tr data-id="car-'+car.id+'">' +
          '<td>' + car.id + '</td>' +
          '<td>' + car.name + '</td>' +
          '<td>' + car.color + '</td>' +
          '<td>' + car.weight + '</td>' +
          '<td>' + new Date(parseInt(car.date_time)) + '</td>' +
          '<td><a href="#" class="delete" data-id="delete-'+ car.id +'">x</a></td>' +
          '</tr>';
      });

      $('#cars-table tbody').html(rows);

      // clearing this variable because on update, we'll need to override the previous records
      rows = '';
      return;
    });
  }

  function mapWeights() {
    var weightOptions = '';
    var counter = 0;

    App.list.then(function(list) {
      if (list.length) {
        _(list).forEach(function(car) {
          weightOptions += '<option value="' + car.weight + '">' + car.weight + '</option>';
          counter++;
        });

        weightOptions = '<option value="">-- Set Car Weight --</option>' + weightOptions + '<option value="'+ counter++ + '">' + counter++ + '</option>';
      }
      else {
        weightOptions += '<option value="1">1</option>';
        weightOptions = '<option value="">-- Set Car Weight --</option>' + weightOptions;
      }

      $('#car-weight').html(weightOptions);
    });
  }

  function initMapping() {
    mapTable();
    mapWeights();
  }

  return {
    initMapping : initMapping,
    mapTable    : mapTable,
    mapWeights  : mapWeights
  };
})(jQuery, App);
