import React from "react";
import "./style.scss"

interface IGlowingBoxProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingBox = ({ children, className }: IGlowingBoxProps) => {
  return (
    <div className={`glowing-box-container ${className}`}>
      {children}
    </div>
  )
}

export default GlowingBox;