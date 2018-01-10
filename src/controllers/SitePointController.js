import {
  makeClassInvoker
} from 'awilix-koa'
import BaseController from '../lib/BaseController'

class SitePointController {
  constructor({
        sitesService
    }) {
    this.sitesService = sitesService
  }

  async getInfoSite(ctx) {
    const site = ctx.params.site
    ctx.body = ""
    let ret = await this.sitesService.getServerInformation(site)
    ctx.body = ret.value
   // BaseController.createResponseFromResult(ctx,
    //  await this.sitesService.getServers(site), "inf")
  }
}

export default function (router) {
  // Same trick as the functional API, but using `makeClassInvoker`.
  const api = makeClassInvoker(SitePointController)

  router.get('/sites/info/:site', api('getInfoSite'))
}
/*
router.post('/resume', (ctx) => {
  ctx.body = '';
  return new Promise((resolve, reject) => {
    form.on('error', reject);
    form.on('close', resolve);
    form.parse(ctx.req, (err, fields, files) => {
      sendMail(fields.candidateName, files.attachment)
        .then((completed) => {
          ctx.body += completed + '\n';
        })
        .catch((err) => {
          ctx.body += 'ERROR: ' + err + '\n';
          ctx.status = 500;
        })
    });
  });
});*/