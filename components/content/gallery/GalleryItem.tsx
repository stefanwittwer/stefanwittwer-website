import Link from "next/link"
import { MouseEventHandler } from "react"
import { IPostPreview } from "../../../data/gallery"
import GalleryCategoryTag from "./GalleryCategoryTag"
import styles from "./GalleryItem.module.scss"

interface GalleryItemProps {
  post: IPostPreview
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const GalleryItem = (props: GalleryItemProps) => (
  <Link href={`/gallery/${props.post.slug}`} className={styles.item} onClick={props.onClick}>
    {props.post.coverImage && (
      <div
        className={styles.coverImage}
        style={{ backgroundImage: `url("${props.post.coverImage}")` }}
      />
    )}
    <div className={styles.depiction}>
      <GalleryCategoryTag category={props.post.category} />
      <h2 className={styles.title}>{props.post.title}</h2>
      <p className={styles.description}>{props.post.excerpt}</p>
    </div>
  </Link>
)

export default GalleryItem
