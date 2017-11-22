import createServer from './app/lib/server'

createServer().then(app => {
  app.listen(3000, () => {
  })
})