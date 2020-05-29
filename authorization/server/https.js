const express = require('express');
const compression = require('compression');
const path = require('path');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const port = 8080/*process.env.PORT || 8080;*/
const app = express();

const serverRootPath = path.join(__dirname + '/../dist');

app.use(cors());
/*app.use(compression());*/
app.use('/', express.static(serverRootPath));

/*app.use(express.static(serverRootPath, {
  // maxAge: 31557600000
}));*/
/*app.get('*', (_, response) => {
  response.sendFile(path.resolve(serverRootPath, 'index.html'));
});*/

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname + '/cert/localhost.key')),
  cert: fs.readFileSync(path.resolve(__dirname + '/cert/localhost.crt')),
}, app)
.listen(port, () => {
  console.log(`Server root path: ${serverRootPath}`);
  console.log(`Server started on port ${port}. Visit https://localhost:${port}/`);
  console.log('Press CTRL + C to stop the server');
});
