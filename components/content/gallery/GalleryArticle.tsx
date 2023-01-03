import Link from "next/link"
import { IPost } from "../../../data/gallery"
import styles from "./GalleryArticle.module.scss"
import GalleryCategoryTag from "./GalleryCategoryTag"

interface GalleryArticleProps {
  post: IPost
}

const GalleryArticle = (props: GalleryArticleProps) => (
  <div className={styles.content}>
    <GalleryCategoryTag category={props.post.category} />
    <Link href={`/gallery/${props.post.slug}`}>
      <h1>{props.post.title}</h1>
    </Link>
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: props.post.content }} />
  </div>
)

export default GalleryArticle
