import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://decent-toucan-69.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':'OYZ1ZcugULZ0OGvGRwof7PbZPjK2SggYiJI91Hwv6N8NK9JeWyUL2IU7Lb87fjsV'
    }
  });

export default client