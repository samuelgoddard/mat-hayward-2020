const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsJournal {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsJournal.edges.map(({ node: journal }) => {
        createPage({
          path: `journal/${journal.slug}`,
          component: path.resolve(`./src/templates/journalPost.js`),
          context: {
            slug: journal.slug,
          },
        })
      })
      resolve()
    })
  }) 
}
