export default function (opts) {

    let count = 0;

    return async function ipInfo(ctx, next) { 
        console.log(count++)
        next()
    }
}