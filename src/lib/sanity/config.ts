const config = {
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2022-11-29",
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
}

export default config
