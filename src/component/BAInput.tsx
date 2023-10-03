type propsType = {
  label: string;
  onChange?: any;
  type?: string;
  value?: any;
  disabled?:any;
};

export default function BAInput(props: propsType) {
  const { label, onChange, type, value ,disabled } = props;
  return (
    <input
    className="p-3 border-2 border-slate-300 focus:border-teal-700 w-full outline-none rounded "
      disabled ={disabled}
      placeholder={label}
      value={value}
      onChange={onChange}
      type={type ?? "text"}
      required
      />
  );
}
