const app = require('./src/server');

console.log('this is the app', app);

app.listen(3000, () => console.log('App is running on port 3000'));