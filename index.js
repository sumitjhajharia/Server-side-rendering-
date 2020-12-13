const express = require('express');
const next = require('next');
 
 
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); 
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

     server.use('/cp', (req,res)=> {
        req.render(req, res, '/cp/in-service', { token: '1234' });
    
     });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  }) 