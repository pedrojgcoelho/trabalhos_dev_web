$(document).ready(function() {
    var inputField = $('#inputText');
    var charCount = $('#charCount');
  
    inputField.on('input', function() {
      var count = $(this).val().length;
      charCount.text(count);
    });
  
    inputField.hover(
      function() {
        $(this).css('background-color', 'yellow');
      },
      function() {
        $(this).css('background-color', 'white');
      }
    );
  });
  