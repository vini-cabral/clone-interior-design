import IImage from "./image"

export default interface IShowcase {
  id: string
  createdAt: string
  title: string
  thumbnail: IImage
  large: IImage
}
