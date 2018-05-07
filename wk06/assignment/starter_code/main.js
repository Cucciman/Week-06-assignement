var cityName = ["NYC", "SF", "LA", "ATX", "SYD"]

cityName.forEach (function(city) {
  $('#city-type').append($("<option></option>").text(city));
});

$('#city-type').change(changeBackground);

function changeBackground() {
  var city = $('#city-type').val();
  if (city === 'NYC') {
    $('body').removeClass().addClass('nyc');
    $('p').html(city);    /*not requested - carry over from previous citipix exercise */
    $('title').html('CitiPix:'+ city);
  } else if (city === 'SF') {
    $('body').removeClass().addClass('sf');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  } else if (city === 'LA') {
    $('body').removeClass().addClass('la');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  } else if (city === 'ATX') {
    $('body').removeClass().addClass('austin');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  } else if (city === 'SYD') {
    $('body').removeClass().addClass('sydney');
    $('p').html(city);
    $('title').html('CitiPix:'+ city);
  } else
  $('body').addClass('cityPixDefault');
  $('p').html(city);
  $('title').html('CitiPix:');
};
