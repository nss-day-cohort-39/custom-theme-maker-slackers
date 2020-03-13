
const eventHub = document.querySelector(".container")

export const BorderButtons = () => {
  return `
  <article class="borderSizes">
    <fieldset>
    <legend>Border Sizes</legend>

    <div class="flexVertical">
      <label for="onepixel" class="pixelsRadios">1px
        <input type="radio" name="pixelsize" class="borderSize-one" value="border-one" />
      </label>

      <label for="threepixels" class="pixelsRadios">3px
        <input type="radio" name="pixelsize" class="borderSize-three" value="border-three" />
      </label>

      <label for="fivepixels" class="pixelsRadios">5px
        <input type="radio" name="pixelsize" class="borderSize-five" value="border-five" />
      </label>

    </div>
    </fieldset>
  </article>
  `
}


// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

  // Make sure it was one of the color buttons
  if (clickEvent.target.name === ("pixelsize")) {

      // Get the chosen color
      const chosenBorder = clickEvent.target.value

      /*
          Create a new custom event, with a good name, and
          add a property to the `detail` object that specifies
          which color was chosen
      */
      const borderChosenEvent = new CustomEvent("borderChosen", {
          detail: {
              border: chosenBorder
          }
      })

      eventHub.dispatchEvent(borderChosenEvent)
  }
})