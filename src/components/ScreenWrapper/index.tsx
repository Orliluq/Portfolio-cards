import React from "react";
import './style.scss';

interface IScreenWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const ScreenWrapper = ({ children, className }: IScreenWrapperProps) => {
    return (
        <div className={`screen-wrapper ${className}`}>
            {children}
        </div>
    )
}

export default ScreenWrapper;