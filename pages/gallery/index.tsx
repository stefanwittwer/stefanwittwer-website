import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { useState } from "react"
import Gallery, { GalleryPost } from "../../components/content/gallery/Gallery"
import GalleryDetail from "../../components/content/gallery/GalleryDetail"
import Page from "../../components/page/Page"
import GalleryData from "../../data/gallery.json"

interface GalleryPageStaticProps {
  posts: GalleryPost[]
}

export const getStaticProps: GetStaticProps<GalleryPageStaticProps> = async () => ({
  props: {
    posts: GalleryData.posts,
  },
})

const GalleryPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null)

  return (
    <Page>
      <Head>
        <title>Thoughts, learnings and case studies - Stefan Wittwer</title>
        {/* TODO: Write a meta description and add a social graph image */}
      </Head>
      <main>
        <Gallery posts={props.posts} onPostClick={(slug) => setCurrentSlug(slug)} />
        <GalleryDetail currentSlug={currentSlug} onClose={() => setCurrentSlug(null)} />
      </main>
    </Page>
  )
}

export default GalleryPage
