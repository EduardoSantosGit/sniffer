import { listModules } from 'awilix'

/**
 * Resolves and creates controllers.
 *
 * @param  {KoaRouter} router
 * The router to pass to the factories.
 */
export default function createControllers (router) {
  const result = listModules('../controllers/*.js', { cwd: __dirname })
  result.forEach(
    m => require(m.path).default(router)
  )
}
