const express = require('express');
const compression = require('compression');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3030;
const app = express();

const serverRootPath = path.join(__dirname + '/../dist');

app.use(cors());


/*app.use(compression());*/
app.use('/', express.static(serverRootPath));



/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

app.listen(port, () => {
  console.log(`Server root path: ${serverRootPath}`);
  console.log(`Server started on port ${port}. Visit http://localhost:${port}/`);
  console.log('Press CTRL + C to stop the server');
});
