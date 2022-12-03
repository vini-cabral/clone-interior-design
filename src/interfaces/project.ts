import IImage from "./image"

export default interface IProject {
  id: string
  createdAt: string
  title: string
  thumbnail: IImage
  large: IImage
}
