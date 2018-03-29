$(document).ready(function() {
  $('select').formSelect();
  const LOAD_PICTURE = $('#load-picture');
  const PICTURE = $('#picture');
  const IMG_URL = $('#img-url');
  const IMG_WIDTH = $('#img-width');
  const IMG_HEIGHT = $('#img-height');
  const IMG_FILTER = $('#img-filter');
  const FILTER_OPTIONS = $('.filter-options')

  LOAD_PICTURE.click(function() {
    PICTURE.attr('src', IMG_URL.val())
      .attr('width', IMG_WIDTH.val())
      .attr('height', IMG_HEIGHT.val());
  });

  IMG_FILTER.change(function(e) {
    FILTER_OPTIONS.each(function() {
      console.log($(this));
      if ($(this) == e.target.value) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
    console.log(e.target);
  });
});