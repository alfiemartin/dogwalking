import React from "react";
import {
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const TopBarText = ({ children }: { children: string }) => (
  <span className="font-thin text-xs text-foreground-300">{children}</span>
);

const TopBarIcons = () => (
  <div className="flex gap-2">
    <AiOutlineFacebook />
    <AiOutlineInstagram />
  </div>
);

const TopBarInfo = () => (
  <div className="flex items-center gap-2">
    <AiOutlinePhone />
    <TopBarText>07528559068</TopBarText>
  </div>
);

const TopBar = () => {
  return (
    <div className="bg-background-50">
      <div className="container mx-auto p-2 flex justify-between">
        <TopBarInfo />
        <TopBarIcons />
      </div>
    </div>
  );
};

export default TopBar;
