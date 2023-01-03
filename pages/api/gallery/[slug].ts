import { NextApiRequest, NextApiResponse } from "next"
import GalleryAPI, { IPost } from "../../../data/gallery"

const handler = async (req: NextApiRequest, res: NextApiResponse<IPost>) => {
  const { slug } = req.query
  if (typeof slug !== "string") return res.status(400).end()

  const api = new GalleryAPI()
  const post = await api.post(slug)

  res.status(200).json(post)
}

export default handler
