import assert from 'assert'

const HTTP_X_REQUEST_ID_HEADER = 'X-Request-Id'

export default function xRequestId(options, app) {
  options = options || {}
  const key = options.key || HTTP_X_REQUEST_ID_HEADER
  const noHyphen = !!options.noHyphen
  const inject = !!options.inject
  
  if (inject) {
    if (!app) throw new TypeError('`app` must be required!');

    Object.defineProperty(app.request, 'id', {
      get: function() {
        return this._id
      },
      set: function(id) {
        this._id = id
      }
    })
    Object.defineProperty(app.context, 'id', {
      get: function() {
        return this.request.id
      }
    })
  }
  
  return (ctx, next) => {
    var id = ctx.id || ctx.query[key] || ctx.get(key)
    if (noHyphen) id = id.replace(/\-/g, '')
    if (inject) ctx.request.id = id
    ctx.set(key, id)
    return next()
  }
}