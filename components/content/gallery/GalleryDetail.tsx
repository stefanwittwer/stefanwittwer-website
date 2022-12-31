import React from "react"
import DetailView from "../../layout/detail-view/DetailView"

interface GalleryDetailProps {
  currentSlug: string | null
  onClose: () => void
}

const GalleryDetail = (props: GalleryDetailProps) => (
  <DetailView
    isOpen={!!props.currentSlug}
    onClose={() => {
      props.onClose()
      history.pushState(null, "", "/gallery")
    }}
  >
    <h1>{props.currentSlug}</h1>
    <main>Detail text is going here.</main>
  </DetailView>
)

export default GalleryDetail
