import { BorderButtons } from "./BorderButtons.js"
import { ColorButtons } from "./ColorButtons.js"
import { FontButtons } from "./FontButtons.js"

export const ThemeOptions = () => {
  return `
    <article class="container__panel themeOptions">
      ${BorderButtons()}
      ${ColorButtons()}
      ${FontButtons()}
    </article>
  `
}

// >>>>>>>>>>>>>>>>>>>
const eventHub = document.querySelector("#container")

eventHub.addEventListener("colorSelected", event => {
  const color = event.detail.color

  eventHub.classList = []
  eventHub.classList.add(color)
})
