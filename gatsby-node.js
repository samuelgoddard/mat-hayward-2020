const createPhotography = require(`./gatsby/createPhotography`)
const createJournal = require(`./gatsby/createJournal`)

exports.createPages = async ({ actions, graphql }) => {
  await createPhotography({ actions, graphql })
  await createJournal({ actions, graphql })
}