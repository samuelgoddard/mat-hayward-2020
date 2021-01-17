const createPhotography = require(`./gatsby/createPhotography`)
const createJournal = require(`./gatsby/createJournal`)

exports.createPages = async ({ actions, graphql }) => {
  await createPhotography({ actions, graphql })
  await createJournal({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}