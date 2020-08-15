import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import "./StyleSheets/Body.css";
import { useDataLayerValue } from "../state/DataLayer";

export default function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search For Artists" type="text" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="Nick" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
