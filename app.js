
/**
 * Module dependencies
 */
//Routes
var api = require('./routes/api');

// serve index and view partials
app.get('/', routes.index);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

