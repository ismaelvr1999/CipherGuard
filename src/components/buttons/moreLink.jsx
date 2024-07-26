import "../../styles/buttons/moreLink.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const MoreLink = ({ to }) => {
  return (
    <Link className="link-more" to={to}>
      <Icon className="icon-more" icon="mingcute:more-4-line" />
    </Link>
  );
};

export default MoreLink;
