var Map = (function($, App) {
  function mapTable(carList, args) {
    if (carList) {
      carList.then(function(list) {
        if (!args) {
          var listing = _.orderBy(list, ['weight', 'sub_weight'], ['asc', 'asc']);
          _distribute(listing).then(function(rows) { $('#cars-table tbody').html(rows); });
        }

        if (args && typeof args == 'object' && typeof args.sort !== 'undefined' && args.sort == false) {
          _distribute(list).then(function(rows) { $('#cars-table tbody').html(rows); });
        }
      });

      return;
    }

    App.list.then(function(list) {
      if (!args) {
        var listing = _.orderBy(list, ['weight', 'sub_weight'], ['asc', 'asc']);
        _distribute(listing).then(function(rows) { $('#cars-table tbody').html(rows); });
      }

      if (args && typeof args == 'object' && typeof args.sort !== 'undefined' && args.sort == false) {
        _distribute(list).then(function(rows) { $('#cars-table tbody').html(rows); });
      }

      return;
    });
  }

  function _distribute(listing) {
    var rows = '';

    _(listing).forEach(function(car) {
      rows += '<tr data-id="car-'+car.id+'">' +
        '<td>' + car.id + '</td>' +
        '<td><i class="fa fa-car"></i>' + car.name + '</td>' +
        '<td class="' + car.color + '">' + car.color + '</td>' +
        '<td>' + car.weight + '</td>' +
        '<td>' + car.sub_weight + '</td>' +
        '<td>' + new Date(parseInt(car.date_time)) + '</td>' +
        '<td><a href="#" class="delete" data-id="delete-'+ car.id +'">delete</a></td>' +
        '</tr>';
    });

    return Promise.resolve(rows);
  }

  function mapWeights() {
    var higherWeightOptions = '';
    var weightOptions = '';
    var counter = 1;

    for (var i = 1; i <= 50; i++) {
      var w = i < 10 ? '0' + i : i;
      higherWeightOptions += '<option value="-' + w + '">-' + w + '</option>';
      weightOptions += '<option value="' + w + '">' + w + '</option>';
    }

    weightOptions = '<option value="">-- Set Car Weight --</option>' + weightOptions;

    $('#car-weight').html(higherWeightOptions.concat(weightOptions));
    $('#car-weight').val('');
  }

  function mapSubWeights() {
    var counter = 1;
    var higherSubWeightOptions = '';
    var subWeightOptions = '';

    for (var i = 1; i <= 50; i++) {
      higherSubWeightOptions += '<option value="-' + i + '">-' + i + '</option>';
      subWeightOptions += '<option value="' + i + '">' + i + '</option>';
    }

    subWeightOptions = '<option value="">-- Select Sub weights --</option>' + subWeightOptions;
    $('#car-subweight').html(higherSubWeightOptions.concat(subWeightOptions));
    $('#car-subweight').val('');
  }

  function initMapping() {
    mapTable();
    mapWeights();
    mapSubWeights();
  }

  return {
    initMapping   : initMapping,
    mapTable      : mapTable,
    mapWeights    : mapWeights,
    mapSubWeights : mapSubWeights
  };
})(jQuery, App);
