const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
var fs = require('fs');

var people = [];



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/home.html');
});

app.get('/api/people', (request, response) => {
      var listCopy = studentList.slice();

   

    response.send(people);
})

app.post('/api/people', (request, response) => {
    console.log(request.body);
    people.push(request.body);

 
   console.log(people.length);

   var data = `
   Nombre: ${request.body.firstname}
   Apellido: ${request.body.lastname}
   Edad: ${request.body.age}

   ----------------------------------
   `;
fs.appendFile('carros.txt', people, 'utf8', (err) => {
        console.log(err ? 'hubo un error' : 'se creó el archivo');
    });

    response.send({
        message: people,
    });});


app.listen(3000, () => {
    console.log('listening');
});