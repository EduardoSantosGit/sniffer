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
        }    
    }

}