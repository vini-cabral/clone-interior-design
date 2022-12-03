import { ENV_SANITY_AUTH_TOKEN, ENV_PUBLIC_NEXT_SANITY_PROJECT_ID } from "../env"

const config = {
  projectId: ENV_PUBLIC_NEXT_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-11-29",
  token: ENV_SANITY_AUTH_TOKEN,
  useCdn: false
}

export default config
