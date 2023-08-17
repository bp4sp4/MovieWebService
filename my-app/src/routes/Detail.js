import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [details, setDetails] = useState({});

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetails(json.data.movie);
    setLoad(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, [id]); // Dependency array should include 'id'

  return (
    <div>
      {load ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          <h2>제목 : {details.title}</h2>
          <h3>점수 : {details.rating}</h3>
          <img src={details.background_image} />
          <h3>러닝타임 : {details.runtime}</h3>
          <h3>개봉일 : {details.year}</h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
