(function($, App, Map) {
  $(document).ready(function() {
    Map.initMapping();

    $('#save-car').click(App.save);
    $('#cancel-car').click(App.cancel);
    $('#car-name').change(App.change);
    $('#car-color').change(App.change);
    $('#car-weight').change(App.change);
  });

  // To keep the table row bindings, whenever the table is reloaded
  // because of the reordering event, we do it this way
  $(document).on('click', '#cars-table tbody tr', {}, function(e) {
    App.rowSelected($(this));
  });
  $(document).on('click', '#cars-table .delete', {}, function(e) {
    e.preventDefault();
    App.remove($(this));
  });
})(jQuery, App, Map);
