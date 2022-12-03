/**
 * WARNING!!!
 * 
 * Variables with the prefix "ENV_PUBLIC" must receive only public values (visible on the client's side).
 * 
 * In NextJS the prefix "PUBLIC_NEXT" makes values visible on the client!
 * 
*/

// Public variables
const ENV_PUBLIC_REPO_AUTHOR_DESC = "Vinícius Cabral"
const ENV_PUBLIC_REPO_AUTHOR_URL = "https://github.com/vini-cabral"
const ENV_PUBLIC_REPO_DESC = "Clone Interior Design"
const ENV_PUBLIC_REPO_URL = "https://github.com/vini-cabral/clone-interior-design"
const ENV_PUBLIC_REF_PROJECT_DESC = "W3Schools Templates - Interior Design"
const ENV_PUBLIC_REF_PROJECT_URL = "https://www.w3schools.com/w3css/tryw3css_templates_interior_design.htm"
const ENV_PUBLIC_NEXT_SANITY_PROJECT_ID = process.env.PUBLIC_NEXT_SANITY_PROJECT_ID!

// CAUTION!!! Private variables
const ENV_SANITY_AUTH_TOKEN = process.env.SANITY_AUTH_TOKEN

export {
  ENV_PUBLIC_REPO_AUTHOR_DESC,
  ENV_PUBLIC_REPO_AUTHOR_URL,
  ENV_PUBLIC_REPO_DESC,
  ENV_PUBLIC_REPO_URL,
  ENV_PUBLIC_REF_PROJECT_DESC,
  ENV_PUBLIC_REF_PROJECT_URL,
  ENV_PUBLIC_NEXT_SANITY_PROJECT_ID,
  ENV_SANITY_AUTH_TOKEN,
}
