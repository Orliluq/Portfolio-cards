import React from "react";
import NavBar from "../../components/NavBar";
import './style.scss';
import CustomParticles from "../../components/CustomParticles";

interface IBasePageProps {
  children: React.ReactNode;
}

const BasePage = ({ children }: IBasePageProps) => {

  return (
    <div>
      <NavBar className="navbar-basepage"/>
      <CustomParticles className="particle-basepage"/>
      <div className="basepage-children">
        {children}
      </div>
    </div>
  )
}

export default BasePage;