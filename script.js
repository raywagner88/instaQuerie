$(document).ready(function() {

  $('select').formSelect();

  const LOAD_PICTURE = $('#load-picture');
  const PICTURE = $('#picture');
  const IMG_URL = $('#img-url');
  const IMG_WIDTH = $('#img-width');
  const IMG_HEIGHT = $('#img-height');
  const IMG_FILTER = $('#img-filter');
  const FILTER_OPTIONS = $('.filter-options');
  const SEPIA = $('#sepia');
  const SEPIA_FILTER = $('#img-sepia');
  const BRIGHTNESS = $('#brightness');
  const BRIGHTNESS_FILTER = $('#img-brightness');
  const GRAYSCALE = $('#grayscale');
  const GRAYSCALE_FILTER = $('#img-grayscale');
  const CONTRAST = $('#contrast');
  const CONTRAST_FILTER = $('#img-contrast');
  const INVERT = $('#invert');
  const INVERT_FILTER = $('#img-invert');
  const SATURATE = $('#saturate');
  const SATURATE_FILTER = $('#img-saturate');
  const BLUR = $('#blur');
  const BLUR_FILTER = $('#img-blur');
  const HUE_ROTATE = $('#hue-rotate');
  const HUE_ROTATE_FILTER = $('#img-hue-rotate');
  const IMAGE = $('#img');
  const SAVE_IMAGE_BTN = $('#btnSave');


  LOAD_PICTURE.click(function() {
    PICTURE.attr('src', IMG_URL.val())
      .attr('width', IMG_WIDTH.val())
      .attr('height', IMG_HEIGHT.val());
    SEPIA_FILTER.css('filter', `sepia(${SEPIA.val()}%)`);
    BRIGHTNESS_FILTER.css('filter', `brightness(${BRIGHTNESS.val()}%)`);
    GRAYSCALE_FILTER.css('filter', `grayscale(${GRAYSCALE.val()}%)`);
    CONTRAST_FILTER.css('filter', `contrast(${CONTRAST.val()}%)`);
    INVERT_FILTER.css('filter', `invert(${INVERT.val()}%)`);
    SATURATE_FILTER.css('filter', `saturate(${SATURATE.val()}%)`);
    BLUR_FILTER.css('filter', `blur(${BLUR.val()}px)`);
    HUE_ROTATE_FILTER.css('filter', `hue-rotate(${HUE_ROTATE.val()}deg)`);
  });

  IMG_FILTER.change(function(e) {
    FILTER_OPTIONS.each(function() {
      if ($(this).attr('id') == e.target.value) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  });



  // domtoimage.toBlob(document.getElementById('my-node'))
  //   .then(function(blob) {
  //     window.saveAs(blob, 'my-node.png');
  //   });

  $("#btnSave").click(function() {
    domtoimage.toBlob(document.getElementById('img'))
      .then(function(blob) {
        console.log(blob);
        window.saveAs(blob, 'my-node.png');
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
      });
  });
}); //docunment ready