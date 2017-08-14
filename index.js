import createServer from './server/app/lib/server'

createServer().then(app => {
  app.listen(3000, () => {
  })
})