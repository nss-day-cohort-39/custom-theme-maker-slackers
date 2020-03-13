import { NewsItem } from "./NewsItem.js"
import { useNews } from "./NewsProvider.js"

export const NewsList = () => {
  const newsItems = useNews()
  return render(newsItems)
}

const render = newsCollection => {
  return `
        <article class="container__panel newsItems">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}
