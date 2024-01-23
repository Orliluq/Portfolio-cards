import "./style.scss";

interface IGridBoxProps {
  className?: string;
  children: React.ReactNode;
}

const GridBox = ({ className, children }: IGridBoxProps) => {
  return (
    <div className={`gridbox-container ${className}`}>
      {children}
    </div>
  )
}

export default GridBox;