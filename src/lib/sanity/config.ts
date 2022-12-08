const config = {
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
}

export default config
