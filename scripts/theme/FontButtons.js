const eventHub = document.querySelector(".container")

export const FontButtons = () => {
  return `
    <article class="fonts">
      <fieldset>
        <legend>Font Sizes</legend>

        <div class="flexVertical">
          <button id="fs-xSmall">Extra Small</button>
          <button id="fs-small">Small</button>
          <button id="fs-large">Large</button>
          <button id="fs-xLarge">Extra Large</button>
        </div>

      </fieldset>
    </article>
  `
}
// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

  if (clickEvent.target.id.startsWith("fs-")) {

      // Get the chosen font
      const chosenFont = clickEvent.target.id

      /*
          Create a new custom event, with a good name, and
          add a property to the `detail` object that specifies
          which font was chosen
      */
      const fontChosenEvent = new CustomEvent("fontChosen", {
          detail: {
              font: chosenFont
          }
      })

      eventHub.dispatchEvent(fontChosenEvent)
  }
})