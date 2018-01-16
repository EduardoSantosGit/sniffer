import createServer from './server/src/lib/createServer'

createServer().then(app => {
  app.listen(3000, () => {
  })
})