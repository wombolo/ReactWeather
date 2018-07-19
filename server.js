let express = require('express');

//Create
let app = express();
const PORT  = process.env.PORT || 3000;

app.use((req, res, next) =>{
    //If request is https
    if (req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://'+ req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express Server on port '+ PORT);
});