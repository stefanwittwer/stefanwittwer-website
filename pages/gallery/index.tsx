import Head from "next/head"
import { useState } from "react"
import Container from "../../components/layout/container/Container"
import Page from "../../components/page/Page"
import Filters from "../../components/presentation/filter/Filters"
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

const GalleryPage = () => {
  const [currentFilter, setCurrentFilter] = useState<GalleryCategory | null>(null)

  return (
    <Page>
      <Head>
        <title>Thoughts, learnings and case studies - Stefan Wittwer</title>
        {/* TODO: Write a meta description and add a social graph image */}
      </Head>
      <main>
        <Container wide>
          <section className={styles.header}>
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
              />
            </div>
          </section>
        </Container>
      </main>
    </Page>
  )
}

export default GalleryPage
