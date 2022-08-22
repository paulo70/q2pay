import Card from "../../components/Card"

const ListMovies = ({
  poster_path,
  id,
  title,
  release_date,
  overview }) => {

  return (
    <>
      <Card>
        <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt='poster' />
        <p>Title: {title}</p>
        <p>Release: {release_date}</p>
        <p>Overview: {overview}</p>
      </Card>
    </>
  )
}

export default ListMovies