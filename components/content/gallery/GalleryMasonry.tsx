import { IPostPreview } from "../../../data/gallery"
import GalleryItem from "./GalleryItem"
import styles from "./GalleryMasonry.module.scss"
import useNumberOfColumns from "./useNumberOfColumns"

interface GalleryMasonryProps {
  posts: IPostPreview[]
  onPostClick?: (slug: string) => void
}

const GalleryMasonry = (props: GalleryMasonryProps) => {
  const numberOfColumns = useNumberOfColumns()
  return (
    <div className={styles.masonry}>
      {Array.from({ length: numberOfColumns }).map((_, index) => {
        const columnPosts = props.posts.filter((_, i) => i % numberOfColumns === index)
        return (
          <div key={index} className={styles.column}>
            {columnPosts.map((post) => (
              <GalleryItem
                key={post.slug}
                post={post}
                onClick={(e) => {
                  e.preventDefault()
                  props.onPostClick?.(post.slug)
                  history.pushState(null, "", `/gallery/${post.slug}`)
                }}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default GalleryMasonry
