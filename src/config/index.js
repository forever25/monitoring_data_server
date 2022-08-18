import fs from 'fs';
import path from 'path';
let config
try {
  config = JSON.parse(fs.readFileSync(path.join('./static/config.json'), { encoding: 'utf8', flag: 'r' }))
} catch (error) {
  config = {

  }
}

export default config;