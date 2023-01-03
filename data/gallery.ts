import GhostContentAPI, { GhostAPI } from "@tryghost/content-api"
import { GalleryPost } from "../components/content/gallery/Gallery"

export interface IPost {
  slug: string
  title: string
  category: string
  content: string
  excerpt: string
  coverImage?: string
}

class GalleryAPI {
  private api: GhostAPI

  constructor() {
    if (!process.env.GHOST_CONTENT_API_HOST || !process.env.GHOST_CONTENT_API_KEY)
      throw new Error(
        "Missing Ghost Content API keys. Ensure the environment variables are set correctly.",
      )

    this.api = new GhostContentAPI({
      url: process.env.GHOST_CONTENT_API_HOST,
      key: process.env.GHOST_CONTENT_API_KEY,
      version: "v5.0",
    })
  }

  public async posts(tag?: string): Promise<GalleryPost[]> {
    const posts = await this.api.posts.browse({
      limit: "all",
      filter: tag ? `tag:${tag}` : undefined,
      include: "tags",
    })
    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.excerpt,
      category: post.tags?.length ? post.tags[0]?.slug : "other",
      publishedOn: post.published_at,
    }))
  }

  public async post(slug: string): Promise<IPost> {
    const post = await this.api.posts.read({ slug }, { include: "tags" })
    return {
      slug: post.slug,
      title: post.title,
      category: post.tags?.length ? post.tags[0]?.name : "other",
      content: post.html,
      excerpt: post.excerpt,
      coverImage: post.feature_image,
    }
  }
}

export default GalleryAPI
