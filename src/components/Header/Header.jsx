import React from "react";
import NavBar from "./NavBar";
import SearchPanel from "./SearchPanel";
import UserAuth from "../userAuth/userAuth";
import UiControls from "../UIControls/UiControls";
import MobileBurgerMenu from "./MobileBurgerMenu/MobileBurgerMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center lg:px-4 px-4">
      <div className="flex flex-row relative ">
        <NavBar />
      </div>
      <div className="flex flex-row items-center gap-4">
        <SearchPanel />
        <UserAuth />
        <UiControls />
      </div>
      <MobileBurgerMenu />
    </header>
  );
}
