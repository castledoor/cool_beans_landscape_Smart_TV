window.onload = function() {

  GSpreadsheet.load("0ArtYn0CJ_Ik8dE04ZUw0amlGUUs4WjEtVTJhMjFrX1E", { index: 'element' }, function(gs) {
    var row = gs.select('header');
    document.getElementById("header_1").innerHTML = row.one;

    var row = gs.select('header');
    document.getElementById("header_2").innerHTML = row.two;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_1").innerHTML = row.one;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_1").innerHTML = row.one;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_2").innerHTML = row.two;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_2").innerHTML = row.two;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_3").innerHTML = row.three;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_3").innerHTML = row.three;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_4").innerHTML = row.four;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_4").innerHTML = row.four;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_5").innerHTML = row.five;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_5").innerHTML = row.five;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_6").innerHTML = row.six;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_6").innerHTML = row.six;

    var row = gs.select('left_menu_item');
    document.getElementById("left_menu_item_7").innerHTML = row.seven;

    var row = gs.select('left_menu_item_price');
    document.getElementById("left_menu_item_price_7").innerHTML = row.seven;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_1").innerHTML = row.one;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_1").innerHTML = row.one;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_2").innerHTML = row.two;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_2").innerHTML = row.two;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_3").innerHTML = row.three;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_3").innerHTML = row.three;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_4").innerHTML = row.four;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_4").innerHTML = row.four;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_5").innerHTML = row.five;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_5").innerHTML = row.five;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_6").innerHTML = row.six;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_6").innerHTML = row.six;

    var row = gs.select('right_menu_item');
    document.getElementById("right_menu_item_7").innerHTML = row.seven;

    var row = gs.select('right_menu_item_price');
    document.getElementById("right_menu_item_price_7").innerHTML = row.seven;

    var row = gs.select('feature');
    document.getElementById("feature").innerHTML = row.one;

    var row = gs.select('feature_item');
    document.getElementById("feature_item").innerHTML = row.one;


  });
}

function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);",timeoutPeriod);
}
