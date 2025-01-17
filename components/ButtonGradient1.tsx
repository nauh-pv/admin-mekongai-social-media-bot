interface ButtonGradient {
  ButtonName: string;
  handleClickButton: () => void;
  textStyle?: string;
}

const ButtonGradient1 = ({
  ButtonName,
  handleClickButton,
  textStyle,
}: ButtonGradient) => {
  return (
    <button
      className={`btn-gradient w-[50%] font-${textStyle} text-base`}
      onClick={handleClickButton}
    >
      {ButtonName}
    </button>
  );
};
export default ButtonGradient1;
