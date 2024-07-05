import ButtonDefaultStyled from "./ButtonDefaultStyled";

interface ButtondefaultProps {
  label: string;
  action?: () => void;
  type?: "submit";
}
function ButtonDefault({ label, type, action }: ButtondefaultProps) {
  return (
    <>
      <ButtonDefaultStyled type={type} onClick={action}>
        {label}
      </ButtonDefaultStyled>
    </>
  );
}

export default ButtonDefault;
