// express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>
    res.send('Hello World!')
);

app.get('/api/users/1', (req, res) => {
    res.json({
        id: 1,
        name: '안준헌',
        age: 30,
        email: '',
        phone: '',
        address: '',
        company: '',
        position: '',
        homepage: '',
        github: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        youtube: '',
        blog: '',
        etc: ''
    });
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);