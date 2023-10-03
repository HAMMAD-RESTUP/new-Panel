type propsType = {
  label: string;
  onClick?: any;
};

export default function BAButton(props: propsType) {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 text-white font-bold text-center py-2 px-3  rounded"
    >
      {label}
    </button>
  );
}
