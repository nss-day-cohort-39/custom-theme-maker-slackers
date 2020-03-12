export const BorderButtons = () => {
  return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}

// // Create and dispatch a custom event for border change buttons
// const contentTarget = document.querySelector(".borderSizes")
// const eventHub = document.querySelector(".container")

// contentTarget.addEventListener("click", clickEvent => {
//   if (clickEvent.target.value === "onepixel") {
//     const theCrimeThatWasChosen = changeEvent.target.value
//     debugger
//     const pixelChosenEvent = new CustomEvent("pixelChosen", {
//       detail: {
//         chosenPixel: thePixelThatWasChosen,
//       },
//     })

//     eventHub.dispatchEvent(pixelChosenEvent)
//   }
// })
