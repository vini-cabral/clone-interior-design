import createImageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
// My App
import config from "./config"

const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source)

export default urlFor
