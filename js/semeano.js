/*
 * Initial calls
 *
 */

function page_loaded() {

    // Show page
    document.body.style.opacity = "1";
}



/*
 * Contact images
 *
 */

$(function() {
  $('.contact img')
    .mouseover(function() { 
      var src = $(this).attr('src').match(/[^\.]+/) + '_hover.png';
      $(this).attr('src', src);
    })
    .mouseout(function() {
      var src = $(this).attr('src').replace('_hover.png', '.png');
      $(this).attr('src', src);
    });
});
