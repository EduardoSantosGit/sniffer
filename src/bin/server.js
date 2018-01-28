import createServer from '../lib/createServer'
import env from '../lib/env'

const PORT = env.PORT || 3000

createServer().then(app => { 
  app.listen(PORT, () => {
  })
})