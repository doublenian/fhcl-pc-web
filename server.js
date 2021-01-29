const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.prod') })
process.env.UNIX_SOCKET = process.env.PORT
process.argv[2] = 'start' // set argument to 'start'
require('nuxt/bin/nuxt') // execute command 'nuxt
