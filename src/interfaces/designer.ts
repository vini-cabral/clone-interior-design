import IImage from "./image"

export default interface IDesigner {
  id: string
  createdAt: string
  name: string,
  position: string,
  description: string,
  image: IImage
}
