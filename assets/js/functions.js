(function($) {
   $(document).ready(function() {
      $('.carousel-element a').each(function() {
         let eparent = $(this).parents('.card');
         let hclass = 'border-primary shadow-lg scale-1';
         console.log(eparent);
         $(this).on('mouseenter mouseleave focusin focusout', function() {
            eparent.toggleClass(hclass);
         });
      });
   });
})(jQuery)