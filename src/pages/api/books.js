export default (request, response) => {
    const {
    query: { name },
  } = req

  res.send(`Hello ${name}!`)
}