import createServer from '../lib/createServer'

createServer().then(app => {
  app.listen(3000, () => {
  })
})