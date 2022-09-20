// express
const express = require('express');
const app = express();
const port = 3000;

// '/' 호출하면 'Hello World!' 출력
app.get('/', (req, res) => res.send('Hello World!'));

// port 3000으로 서버 실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`));