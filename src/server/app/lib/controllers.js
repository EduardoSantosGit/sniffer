import { listModules } from 'awilix'

export default function createControllers (router) {
  const result = listModules('../controllers/*.js', { cwd: __dirname })
  result.forEach(
    m => require(m.path).default(router)
  )
}