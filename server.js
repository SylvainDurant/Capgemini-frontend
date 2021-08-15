const express = require('express');
const app = express();
app.use(requireHTTPS);
const port = process.env.PORT || 8000;

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(express.static('./dist/Capgemini-frontend'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: './dist/Capgemini-frontend'}
  );
});

app.listen(port, () => console.log(`Server running on ${port}`));