export default function (opts) {

    let count = 0;

    return async function ipInfo(ctx, next) { 
        console.log("request " + count++)
        ctx.set("count", count)
        next()
    }
}