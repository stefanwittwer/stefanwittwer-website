import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { useState } from "react"
import GalleryItem from "../../components/content/gallery/GalleryItem"
import Container from "../../components/layout/container/Container"
import Page from "../../components/page/Page"
import Filters from "../../components/presentation/filter/Filters"
import Gallery from "../../data/gallery.json"
import styles from "./gallery.module.scss"

const GalleryCategories = [
  { title: "Design", value: "design" },
  { title: "Code", value: "code" },
  { title: "Product", value: "product" },
  { title: "Business", value: "business" },
  { title: "Workflow", value: "workflow" },
  { title: "Experiments", value: "experiment" },
] as const
type GalleryCategory = typeof GalleryCategories[number]["value"]

interface GalleryPost {
  slug: string
  title: string
  description: string
  category: string
  publishedOn: string
}
interface GalleryPageStaticProps {
  posts: GalleryPost[]
}

export const getStaticProps: GetStaticProps<GalleryPageStaticProps> = async () => ({
  props: {
    posts: Gallery.posts,
  },
})

const GalleryPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentFilter, setCurrentFilter] = useState<GalleryCategory | null>(null)

  return (
    <Page>
      <Head>
        <title>Thoughts, learnings and case studies - Stefan Wittwer</title>
        {/* TODO: Write a meta description and add a social graph image */}
      </Head>
      <main>
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
                <GalleryItem key={post.slug} {...post} />
              ))}
          </section>
        </div>
      </main>
    </Page>
  )
}

export default GalleryPage
