import { ScoreList } from "./sports/ScoreList.js"
import { NewsList } from "./news/NewsList.js"
import { FavoritesList } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"


const eventHub = document.querySelector("#container")

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.font

    eventHub.classList = []
    eventHub.classList.add(font)
})


export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
    `
}
