export default function BAselect(props:any) {
    const { options, label, getValue } = props;
  
    let selectChange = (val:any) => {
      console.log(val)
    };
  
    return (
      <>
        <p>{label}</p>
        <select  className="p-3 border-2 border-slate-300 focus:border-teal-700 w-full outline-none rounded " onChange={(e) => selectChange(e.target.value)}>
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
       <option>6</option>
        </select>
      </>
    );
  }