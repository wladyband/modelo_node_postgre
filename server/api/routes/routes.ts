import { Application, Request, Response } from 'express';

class Routes {
    constructor(app: Application){
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.routes('/')
        .get((req: Request, res: Response) => res.send('ola mundo'));
        
        app.routes('/ola/:nome')
        .get((req: Request, res: Response) => res.send('ola, ${req.params.nome}'));
    }
}

export default Routes;