interface InputDefaultProps {
  key: string;
  label: string;
  action: (value: string) => void;
  value: string ;

}

function InputDefault({ key, label, action, value}: InputDefaultProps) {
  return (
    <>
      <label htmlFor={key}>{label}: </label>
      <input
        type="text"
        key={key}
        onChange={(e) => action(e.target.value)}
        value={value}
      />
    </>
  );
}
export default InputDefault;
