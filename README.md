# InstaQuery
## Goal
Make a 'photo editor' that allows a user to load up any photo by URL and adjust the specific photo properties of the image.
## Technical Goals
- Your project should be in a single folder with 3 files-- `index.html`, javascript file and a stylesheet
- The page should be broken up into two halves vertically-- a left and right hand side
  - Left side should be all of the controls for the app
  - Right side should be the image that is being edited
- You should use HTML `input`s to allow the user these options:
  - HTML inputs are used like so: `<input type=[TYPE]>`
  - Source URL for picture to load (type='text')
  - width of photo (type='number')
  - height of photo (type='number')
  - a button to execute the changes (<button></button>)
- Place an empty image tag on the right hand side like this: `<img src=''>`
- Each form element should have a unique `id` so that you can get the forms current value with jQuery
- Your jQuery code should be all wrapped in a block of code that makes sure the DOM is ready to be manipulated
- First thing to do in your jQuery is get reference to ALL of the form elements by their `id`s and save them into variables
- Attach a click event listener to the button and make it run a function called `updatePicture`
- The `updatePicture()` function will take the current values for the form fields and update the image properties
  - The image source attribute will be updated
  - The image height will be changed to form field value
  - The image width will be changed to form field value
## Extended Technical Goals
- filter type (select w/ options)
  - The following filters should be offered
    - Sepia
    - grayscale
    - brightness
    - contrast
    - invert
    - saturate
  - al of these filters take a `%` as a unit, don't forget it
  - The css filter will be applied
    - Take care to add units to your values!
    - You may need to use template literals to combine the filter that's being used and the filter's value
- the percentage of change for the filter (type='range')
- Allow the users to accept Hue Rotate & Blur filters
- Display the current range value and units next to the HTML form element
## Advanced Technical Goals
- Allow users to upload an image from their computer
- Allow user to download newly edited image
