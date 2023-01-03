import { useState } from "react"
import { IPostPreview } from "../../../data/gallery"
import Filters from "../../presentation/filter/Filters"
import styles from "./Gallery.module.scss"
import GalleryMasonry from "./GalleryMasonry"

const GalleryCategories = [
  { title: "Design", value: "design" },
  { title: "Code", value: "code" },
  { title: "Product", value: "product" },
  { title: "Business", value: "business" },
  { title: "Workflow", value: "workflow" },
  { title: "Experiments", value: "experiment" },
] as const
export type GalleryCategory = typeof GalleryCategories[number]["value"]

interface GalleryProps {
  posts: IPostPreview[]
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
        <GalleryMasonry posts={props.posts} onPostClick={props.onPostClick} />
      </section>
    </div>
  )
}

export default Gallery
