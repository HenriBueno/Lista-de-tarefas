interface RadioDefaultProps {
    key: string;
    label: string;
    action: (value: string) => void;
    value: "progress" | "finished";
    checked: string;
  }
  
  function RadioDefault({ key, label, action, value, checked}: RadioDefaultProps) {
    return (
      <>
        <label htmlFor={key}>{label}: </label>
        <input
          type= "radio"
          key={key}
          onChange={(e) => action(e.target.value)}
          value={value}
          checked={value===checked}
        />
      </>
    );
  }
  export default RadioDefault;
  