$(document).ready(function(){
  $("#flip")
    .css('cursor', 'pointer')
    .click(function(){
    $("#panel").slideToggle(280, 'swing');
  });
});
