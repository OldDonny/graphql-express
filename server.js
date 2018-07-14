var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

//Grapghql schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

//Root resolver

var root = {
    message: () => 'Hello World'
}

//Create an express server and Graphql endpoin
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql:true
}));
app.use('/')
app.listen(4000, () => console.log('Express GraphQl Server os now runntin on localhost:400/graphql'));