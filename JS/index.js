$(".button").hover(function() {
   console.log('hovering');
   $(this).css("background-color", "#FF6F65")
}, function() {
   console.log('leaving hover');
   $(this).css("background-color", "")
});
