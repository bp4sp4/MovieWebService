import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoad(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <div>
      {load ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          <h2>제목 :{detail.title}</h2>
        </div>
      )}
    </div>
  );
}

export default Detail;
