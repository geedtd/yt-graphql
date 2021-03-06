const {ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()


const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
    .then (() => {
        console.log('MongoDB connection successful');
        return server.listen({port:5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })