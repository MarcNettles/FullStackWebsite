/* Handle tab changes*/
$('#cybersecurity-tab, #webdev-tab, #datascience-tab').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    console.log("HEY");
  });