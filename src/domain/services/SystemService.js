import os from 'os'
import packageInfo from '../../../package.json'

export default class ClassService {

  async desc() {
    let jsonInf = {
      "cpu": os.cpus(),
      "hostname": os.hostname(),
      "homedir": os.homedir(),
      "versionSystem": packageInfo.version,
      "main": packageInfo.main
    }
    return jsonInf
  }

}
