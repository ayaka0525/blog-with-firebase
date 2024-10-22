import './Navbar.css';
import { Link } from 'react-router-dom'; // Linkのインポートを追加
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeのインポート
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'; // 使用するアイコンのインポート

function Navbar({ isAuth }) { // 引数をオブジェクトとして受け取るように修正
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} /> ホーム</Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <>
        <Link to="/CreatePost"><FontAwesomeIcon icon={faFilePen} /> 記事投稿</Link>
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログアウト
        </Link>
        </>
      )}

    </nav>
  );
}

export default Navbar; // エクスポートを追加
