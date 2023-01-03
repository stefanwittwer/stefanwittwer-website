import GhostContentAPI, { GhostAPI, PostOrPage } from "@tryghost/content-api"

export interface IPostPreview {
  slug: string
  title: string
  category: string
  excerpt: string
  publishedOn: string
  coverImage?: string
}
export interface IPost extends IPostPreview {
  content: string
  socialImage?: string
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

  private apiRepresentationFor(post: PostOrPage): IPostPreview {
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.tags?.length ? post.tags[0]?.slug : "other",
      publishedOn: post.published_at,
      coverImage: post.feature_image,
    }
  }

  public async posts(tag?: string): Promise<IPostPreview[]> {
    const posts = await this.api.posts.browse({
      limit: "all",
      filter: tag ? `tag:${tag}` : undefined,
      include: "tags",
    })
    return posts.map((post) => this.apiRepresentationFor(post))
  }

  public async post(slug: string): Promise<IPost> {
    const post = await this.api.posts.read({ slug }, { include: "tags" })
    return {
      ...this.apiRepresentationFor(post),
      content: post.html,
      socialImage: post.og_image,
    }
  }
}

export default GalleryAPI
