// express
const express = require('express');
const app = express();
const port = 3000;

// svelte view engine
const svelteViewEngine = require('svelte-view-engine');
app.engine('svelte', svelteViewEngine);
app.set('view engine', 'svelte');

// '/' 호출하면 'Hello World!' 출력
app.get('/', (req, res) => res.sendFile('index.html', { root: '../markdown-mail/markdown-mail-client' }));

// port 3000으로 서버 실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`));