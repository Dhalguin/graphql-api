const movies = [{
  _id: "12345",
  title: "Sinder Twindler",
  year: 2022,
  rating: 6.5,
}];

export const resolvers = {
  Query: {
    getMovies: (_root: any, _args: any, _context: any, _info: any) => {
      return movies;
    },
    getMovie: (_root: any, { id }: any, _context: any, _info: any) => {
      return movies.find(({ _id }) => _id === id);
    }
  },
  Mutation: {
    createMovie: (_root: any, args: any, _context: any, _info: any) => {
      const randomId = Math.random().toString().split('.')[1];
      const newMovie = { ...args, _id: randomId }
      movies.push(newMovie);
      return newMovie;
    }
  }
}