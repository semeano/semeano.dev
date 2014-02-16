/*
 * Initial calls
 *
 */

function page_loaded() {

    //set_up_panel_sizes();

    // Show page
    document.body.style.opacity = "1";
}


/*
 * Sections resize
 *
 */

/*$(window).resize(function() {
    set_up_panel_sizes();
});*/

function set_up_panel_sizes() {

    var window_height = $(window).height();

    // Set section's height
    $('.section').css('height', window_height);
    
    // Set section content's padding top
    var section_content = $('.section_content');
    for (var i = 0; i < section_content.length; i++) {
        var height = parseInt($($('.section_content')[i]).css('height').replace('px', ''));
        var padding_top = (window_height - height) / 2.2;
        $($('.section_content')[i]).css('padding-top', padding_top);
    }
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
