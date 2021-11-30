const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
var iPortaTcp = 4201;
var sIpAddress = "127.0.0.1"
app.listen(iPortaTcp,sIpAddress, () => console.log('API is running on http://' + sIpAddress + ':' + iPortaTcp));
app.use('/paperino', (req, res) => {
console.log("Mi hai chiesto di salutarti");
res.send("<html>Buonanotte al secchio</html>");
});

app.use('/topolino', (req, res) => {
    console.log("Mi hai chiesto di salutarti");
    res.send("<html>Buonanotte a tutti!!!</html>");
    });

    app.use('/api/heroes', (req, res) => {
        console.log("Ricevuto");
        const obj = [
          { id: 11, name: 'Dr Nice', preferedday:'10//11/2021'},
          { id: 12, name: 'Narco', preferedday:'10//11/2021'},
          { id: 13, name: 'Bombasto', preferedday:'10//11/2021'},
          { id: 14, name: 'Celeritas', preferedday:'10//11/2021'},
        ];
        const myJSON = JSON.stringify(obj);
        res.send(myJSON);
        });
    
