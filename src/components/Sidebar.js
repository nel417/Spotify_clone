import React from "react";
import "./StyleSheets/sidebar.css";
import "./StyleSheets/SidebarOption.css";
import { useDataLayerValue } from "../state/DataLayer";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export default function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your library" />
      <br />
      <strong className="sidebar__title"> Playlists </strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      <SidebarOption title="HipHop" />
    </div>
  );
}
