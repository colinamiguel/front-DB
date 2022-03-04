const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const models = require('./models/index')


//models
models.sequelize.authenticate().then(() => {
    console.log("Estas conectado a la BD")//conexion bd
})

models.sequelize.sync()//sync modelos con bd


//GraphQL

//typeDefs
import typeDefs from './graphQL/typeDefs/typeDefs'
//Resolvers
import resolvers from './graphQL/resolvers/resolvers' 

//---------------------------------
const server = new ApolloServer({ typeDefs, resolvers, context: {models} })
const app = express();
server.applyMiddleware({app});

app.listen({ port: 4000 }, () => {
    console.log("Corriendo Servidor Apollo en http://localhost:4000" + server.graphqlPath)
})

