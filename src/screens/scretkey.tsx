import { useState } from "react";
import BAButton from "../component/BAButton";
import BAInput from "../component/BAInput";
import { fbLogin } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";

export default function ScreteKey() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };
  
  const navigate = useNavigate();

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        navigate("/quiz");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-slate-500 via-red-500 to-orange-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-5">
            <h1 className="text-3xl font-medium">Enter Screte Key To Unlock Quiz</h1>
          </div>

       
          <div className="py-5">
            <BAInput
              value={model.screte}
              onChange={(e: any) => fillModel("screte", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-5">
            <BAButton onClick={LoginUser} label="Open" />
          </div>
        </div>
      </div>
    </>
  );
}
