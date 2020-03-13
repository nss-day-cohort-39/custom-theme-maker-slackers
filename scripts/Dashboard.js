import { ScoreList } from "./sports/ScoreList.js"
import { NewsList } from "./news/NewsList.js"
import { FavoritesList } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.font

    eventHub.classList = ["container"]
    eventHub.classList += " " + (font)
})


eventHub.addEventListener("borderChosen", event => {
    const border = event.detail.border

    eventHub.classList = ["container"]
    eventHub.classList += " " + (border)
})


export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
    `
}
