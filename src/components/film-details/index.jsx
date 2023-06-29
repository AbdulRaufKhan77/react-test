import { useQuery, gql } from '@apollo/client';
const GET_FILM_DETAILS = gql`
    query{
        allFilms {
            films {
                director
                created
                id
                title
      }
    }
  }
`;

export const FilmDetails = () => {
    const {loading , error , data}  = useQuery(GET_FILM_DETAILS)

    return (
        <div>
            <h1>Film details component</h1>
        </div>
    )
}
