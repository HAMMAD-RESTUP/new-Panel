import { useState } from "react";
import BAButton from "../component/BAButton";
import BAInput from "../component/BAInput";

import { fbSignUp } from "../config/firebasemethods";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

 

  const navigate = useNavigate();
  model.role = 'user'
  let signUpUser = () => {
    fbSignUp(model)
      .then((res) => {
        console.log("sign up successfully")
        if (model.role == 'admin') {
          navigate("/admin")
        } else {

          navigate("/quiz");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-slate-500 via-red-500 to-orange-300 h-screen flex justify-center items-center">
        <div className="w-[600px] bg-[rgba(255,255,255,.2)] p-8 rounded-lg">
          <div className="py-1">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-2">
            <BAInput
              value={model.userName}
              onChange={(e: any) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-2">
            <BAInput
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py2">
            <BAInput
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-2">
            <BAInput
              value={model.rollNumber}
              onChange={(e: any) => fillModel("rollNumber", e.target.value)}
              label="Roll Number"
            />
          </div>
          <div className="py-2">
            <BAInput
              value={model.fullName}
              onChange={(e: any) => fillModel("fullName", e.target.value)}
              label="Full Name"
            />
          </div>

          <div className="py-2">
            <BAButton onClick={signUpUser} label="Sign Up" />
          </div>


          <div className="py-2">
          <Link className="text-gray-50 hover:text-slate-700 no-underline text-lg" to="/login">Already Registered Please Login?</Link>
           
          </div>



        </div>
      </div>
    </>
  );
}
