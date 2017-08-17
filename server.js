import express from 'express'

const app = express();

// app.get('/', function (req, res) {
//   res.send('hello world');
// });

app.use(express.static('./views'));
app.listen(3000, () => {
  // console.log('server is on 3000');
});
