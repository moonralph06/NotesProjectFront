import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const DashFooter = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClinked = () => navigate('/dash');

  let goHomeButton = null;

  if (pathname !== '/dash') {
    goHomeButton = (
      <button className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClinked}
      >
      <FontAwesomeIcon icon={faHouse} />
      </button>
    )
  }
  
  const content = (
    <footer className="dash-footer">
      <p>Current User: </p>
      <p>Status: </p>
    </footer>
  )
  return content;
}

export default DashFooter