import { useEffect, useState } from "react"
import type { IPost } from "../../../pages/api/gallery/[slug]"
import DetailView from "../../layout/detail-view/DetailView"
import GalleryArticle from "./GalleryArticle"

interface GalleryDetailProps {
  currentSlug: string | null
  onClose: () => void
}

const GalleryDetail = (props: GalleryDetailProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [post, setPost] = useState<IPost | null>(null)

  useEffect(() => {
    if (props.currentSlug) {
      setPost(null)
      setIsLoading(true)
      fetch(`/api/gallery/${props.currentSlug}`)
        .then((response) => response.json())
        .then((post) => {
          setPost(post)
          setIsLoading(false)
        })
    }
  }, [props.currentSlug])

  return (
    <DetailView
      isOpen={!!props.currentSlug}
      onClose={() => {
        props.onClose()
        history.pushState(null, "", "/gallery")
      }}
    >
      {isLoading || !post ? <p>Loading...</p> : <GalleryArticle post={post} />}
    </DetailView>
  )
}

export default GalleryDetail
