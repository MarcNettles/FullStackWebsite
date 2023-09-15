/* Handle tab changes*/
$('#cybersecurity-tab, #webdev-tab, #datascience-tab, #database-tab').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });