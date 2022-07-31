import "./style.scss";

type Props = {
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  btnValue?: any;
  btnShape?: "square" | "rounded";
  btnColor?: "light";
  btnSize?: undefined | "tiny" | "large";
  btnInsideInput?: boolean;
  children: string;
};

export default function MainButton(props: Props) {
  return (
    <button
      onClick={props.handleClick}
      value={props.btnValue}
      className={`
        mainBtn 
        ${props.btnShape === "rounded" ? `mainBtn--${props.btnShape}` : ""}
        ${props.btnColor ? `mainBtn--${props.btnColor}` : ""}
        ${props.btnSize ? `mainBtn--${props.btnSize}` : ""}
        ${props.btnInsideInput ? `mainBtn--${props.btnInsideInput}` : ""}
        `}
    >
      {props.children}
    </button>
  );
}

// Value
// onClick
// btnSize
// btnColor
// btnShape - rounded square
// btnInsideInput
// Extraclasses
