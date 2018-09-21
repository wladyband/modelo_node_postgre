import * as http from 'http';

import Api from './api/api';
import { errorHandlerApi } from './api/errorHandlerApi';

const config = require('./config/env/config')();


// tsc /server/server.ts
////tsc -p

const server = http.createServer(Api);

Api.use(errorHandlerApi);

server.listen(config.serverPort, () => console.log('servidor rodando na porta 3000'))