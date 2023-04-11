import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://helped-coral-87.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret': 'DjbtHeqNrIqcCgVha2g2Tn3tamyL1ca56vnL1YgeJLDzRBZVnZX0gygUVQFvHb0w'
    }
})

export default client