exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    component: require.resolve("./src/templates/index.js"),
    context: {},
    defer: true,
  })
}
