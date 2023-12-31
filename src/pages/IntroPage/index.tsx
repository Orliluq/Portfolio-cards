import React from "react";
import BasePage from "../BasePage";
import IntroduceSection from "./IntroduceSection";
import './style.scss'
import WelcomeSection from "./WelcomeSection";

const IntroPage = () => {
    return (
        <BasePage>
            <WelcomeSection />
            <IntroduceSection />
        </BasePage>
    )
}

export default IntroPage;