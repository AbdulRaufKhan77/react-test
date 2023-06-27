import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer',
    cache: new InMemoryCache(),
  });

export default client