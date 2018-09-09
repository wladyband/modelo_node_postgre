import * as http from 'http';

// tsc /server/server.ts

const server = http.createServer();

server.listen(3000, () => console.log('servidor rodando na porta 3000'))