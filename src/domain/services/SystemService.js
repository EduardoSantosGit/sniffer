import os from 'os'

export default class ClassService {

  async description() {
    let jsonInf = {
      "cpu": os.cpus(),
      "hostname": os.hostname(),
      "homedir": os.homedir()
    }
    return jsonInf
  }

}
