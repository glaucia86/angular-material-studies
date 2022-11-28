/**
 * file: server.js
 * description: file responsible for starting the application's server
 * date: 11/28/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
