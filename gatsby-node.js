const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPhotography {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPhotography.edges.map(({ node: photography }) => {
        createPage({
          path: `photography/${photography.slug}`,
          component: path.resolve(`./src/templates/photographyPost.js`),
          context: {
            slug: photography.slug,
          },
        })
      })
      resolve()
    })
  })
}