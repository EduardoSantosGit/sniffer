export default class BaseController {

    static createResponseFromResult(ctx, result, resourceName = null) {

        if (result.status === "OK") {
            ctx.status = 200;
            if (Array.isArray(result.value)) {
              ctx.body = {
                "totalCount": (result.value || []).length,
              };
              
            if (!resourceName)
                resourceName = "items";
      
            ctx.body[resourceName] = result.value;
            } 
            else {
              if (resourceName) {
                ctx.body = {};
                ctx.body[resourceName] = result.value;
              } 
              else {
                ctx.body = result.value;
              }
            }
        } 
        else if (result.status === "ERROR") {
            ctx.status = 500;
            ctx.body = {
              "messages": result.value
            };
        }
        else {
            ctx.status = (result.status === "NOTFOUND")
              ? 404
              : (result.status === "DUPLICATED")
                ? 409
                : (result.status === "UNAUTHORIZED")
                ? 401
                : 400;
            ctx.body = {
              "messages": result.value
            };      
        }

    }

}