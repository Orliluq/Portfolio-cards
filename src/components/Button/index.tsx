import "./style.scss";

interface IButtonProps {
  onClick: () => void;
  title: string;
  icon?: React.ReactNode;
}

const Button = ({ onClick, title, icon}: IButtonProps) => {
  return (
    <div className="button-container" onClick={onClick}>
      {icon}
      {title}
    </div>
  )
}

export default Button;