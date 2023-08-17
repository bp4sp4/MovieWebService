// 필요한 모듈을 가져옵니다.
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Movie 컴포넌트를 정의합니다.
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      {/* 영화 커버 이미지를 표시합니다. */}
      <img src={coverImg} alt={title} />

      {/* 영화 제목을 링크로 감싸서 클릭 시 개별 영화 페이지로 이동합니다. */}
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>

      {/* 영화 요약을 표시합니다. */}
      <p>{summary}</p>

      {/* 장르 목록을 순회하며 리스트로 표시합니다. */}
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// Movie 컴포넌트의 속성(props)의 유효성을 검사합니다.
Movie.propTypes = {
  id: PropTypes.number.isRequired, // id: 숫자 타입, 필수 속성
  coverImg: PropTypes.string.isRequired, // coverImg: 문자열 타입, 필수 속성
  title: PropTypes.string.isRequired, // title: 문자열 타입, 필수 속성
  summary: PropTypes.string.isRequired, // summary: 문자열 타입, 필수 속성
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // genres: 문자열 배열 타입, 필수 속성
};

// Movie 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
export default Movie;
