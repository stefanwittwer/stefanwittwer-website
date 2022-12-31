import { useState } from "react"
import Filters from "../../presentation/filter/Filters"
import styles from "./Gallery.module.scss"
import GalleryItem from "./GalleryItem"

const GalleryCategories = [
  { title: "Design", value: "design" },
  { title: "Code", value: "code" },
  { title: "Product", value: "product" },
  { title: "Business", value: "business" },
  { title: "Workflow", value: "workflow" },
  { title: "Experiments", value: "experiment" },
] as const
export type GalleryCategory = typeof GalleryCategories[number]["value"]

export interface GalleryPost {
  slug: string
  title: string
  description: string
  category: string
  publishedOn: string
}

interface GalleryProps {
  posts: GalleryPost[]
  onPostClick?: (slug: string) => void
}

const Gallery = (props: GalleryProps) => {
  const [currentFilter, setCurrentFilter] = useState<GalleryCategory | null>(null)

  return (
    <div className={styles.container}>
      <section className={styles.sidebar}>
        <h1>Thoughts, learnings and case studies</h1>
        <p>This is where I collect things from both inspiration and personal experience.</p>
        <div className={styles.filters}>
          <Filters
            options={GalleryCategories.map((category) => ({
              icon: category.value,
              title: category.title,
              value: category.value,
            }))}
            currentFilter={currentFilter}
            onChange={(filter) => setCurrentFilter(filter)}
            vertical
          />
        </div>
      </section>
      <section className={styles.gallery}>
        {props.posts
          .filter((post) => !currentFilter || post.category === currentFilter)
          .map((post) => (
            <GalleryItem
              key={post.slug}
              {...post}
              onClick={(e) => {
                e.preventDefault()
                props.onPostClick?.(post.slug)
                history.pushState(null, "", `/gallery/${post.slug}`)
              }}
            />
          ))}
      </section>
    </div>
  )
}

export default Gallery
