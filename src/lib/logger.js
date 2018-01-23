import { Bristol } from 'bristol'
import palin from 'palin'

const logger = new Bristol()
logger.addTarget('console').withFormatter(palin, {
  rootFolderName: 'sniffer'
})

export default logger