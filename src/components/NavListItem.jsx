import React from "react";
import "./NavListItem.css";

function NavListItem({ nav, navOnClick }) {
  const renderLinkContent = () => {
    if (nav.name === "home") {
      return (
        <ion-icon name="home-outline" style={{ fontSize: "1.5rem" }}></ion-icon>
      );
    } else {
      return nav.name;
    }
  };

  return (
    <li>
      <a
        href={nav.link}
        className={nav.active ? "active" : undefined}
        onClick={() => navOnClick(nav._id)}
      >
        {renderLinkContent()}
      </a>
    </li>
  );
}

export default NavListItem;
