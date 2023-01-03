import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import GalleryArticle from "../../components/content/gallery/GalleryArticle"
import Page from "../../components/page/Page"
import GalleryAPI, { IPost } from "../../data/gallery"
import styles from "./[slug].module.scss"

export const getStaticPaths: GetStaticPaths = async () => {
  const api = new GalleryAPI()
  const posts = await api.posts()
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

interface GalleryPostPageStaticProps {
  post: IPost
}

export const getStaticProps: GetStaticProps<GalleryPostPageStaticProps> = async (content) => {
  const { slug } = content.params
  if (typeof slug !== "string") throw new Error("Slug is not a string")

  const api = new GalleryAPI()
  const post = await api.post(slug)
  return { props: { post } }
}

const GalleryPostPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page>
    <Head>
      <title>{props.post.title} - Stefan Wittwer</title>
      <meta name="description" content={props.post.excerpt} />
      <meta property="og:title" content={props.post.title} />
      <meta property="og:type" content="article" />
      {props.post.coverImage && <meta property="og:image" content={props.post.coverImage} />}
      <meta property="og:description" content={props.post.excerpt} />
      <meta property="og:site_name" content="Stefan Wittwer" />
      <meta
        property="og:url"
        content={`https://www.stefanwittwer.com/gallery/${props.post.slug}`}
      />
    </Head>
    <main className={styles.article}>
      <GalleryArticle post={props.post} />
    </main>
  </Page>
)

export default GalleryPostPage
