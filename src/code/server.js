export const restExample = `GET /api/pizza/cheese
GET /api/pizza/supreme
GET /api/pizza/margherita`;

export const gqlExample = `query {
  pizza {
    cheese {
      mozzarella
    }
    toppings {
      basil
      mushrooms
    }
  }
}`;

export const apolloServer = `const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
  .then(() => {
    console.log('Server ready! 🚀')
  })
`;

export const errors = `import { AuthenticationError } from 'apollo-server';

const resolvers = {
  Mutation: {
    protectedAction(root, args , { user }) { 
      if (!user) { 
        throw new AuthenticationError('You must be logged in');
      }
    }
  }
};`;

export const yoga = `import { GraphQLServer } from 'graphql-yoga'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() =>
  console.log('Server is running!'
))`;

export const errors2 = `const client = new ApolloClient({
  uri: 'https://mygraphqlapi.com/graphql',
  onError: ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            const { headers } = operation.getContext()
            operation.setContext({
              headers: {
                ...headers,
                authorization: getNewToken(),
              },
            });
            return forward(operation);
          case 'ANOTHER_ERROR_CODE':
            // ...
        }
      }
    }
  },
});`;

// const fetchMovies = sort => async dispatch => {
//   dispatch(requestMovies(sort));

//   const results = await fetch('https://movieapi.com/movies');
//   const movies = await results.json();

//   const sortedMovies =
//     sort === 'POPULARITY'
//       ? movies.sort((a, b) => b.popularity - a.popularity)
//       : movies;

//   return dispatch(receiveMovies(sort, sortedMovies));
// };

// const resolvers = {
//   Query: {
//     movies: async (root, { sort }) => {
//       const results = await fetch('https://movieapi.com/movies');
//       const movies = await results.json();

//       return sort === 'POPULARITY'
//         ? movies.sort((a, b) => b.popularity - a.popularity)
//         : movies;
//     },
//   },
// };

export const dataSource = `class MovieAPI extends RESTDataSource {
  baseURL = 'https://movieapi.com/';

  async getMostViewedMovies() {
    const body = await this.get('movies', {
      per_page: 10,
      order_by: 'most_viewed',
    });
    return body.results;
  }
  willSendRequest(request: Request) {
    request.headers.set('Authorization',
      this.context.token
    );
  }
}`;
