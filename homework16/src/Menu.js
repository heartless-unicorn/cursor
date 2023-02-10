import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Menu(response) {
  const [like, Liked] = useState(false);
  const [likes, countLike] = useState(response.count);

  const handleLike = (event) => {
    Liked((current) => !current);
    like ? countLike(likes - 1) : countLike(likes + 1);
  };

  return (
    <div className="Menu">
      <span>
        {" "}
        <FontAwesomeIcon
          icon={faHeart}
          className={like ? "button liked" : "button"}
          onClick={handleLike}
        />
        <span>{likes}</span>
      </span>
      <FontAwesomeIcon icon={faShare} className="button" />
      <FontAwesomeIcon icon={faDownload} className="button" />
    </div>
  );
}
