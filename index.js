const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('wow node js very excited to leart it')
})


// user api
const users = [
    { id: 0, name: 'raju', email: 'majharul@gmail.com' },
    { id: 1, name: 'shagor', email: 'shagor@gmail.com' },
    { id: 2, name: 'manik', email: 'manik@gmail.com' },
    { id: 3, name: 'omar', email: 'omar@gmail.com' }
]

app.get('/users', (req, res) => {
    const search = (req.query.search);

    // use querry parameter
    if (search) {
        const searchresult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchresult);
    }
    else {
        res.send(users)
    }
})

// app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting');
    // res.send(JSON.stringify(newUser));
    res.json(newUser)

})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port);
})