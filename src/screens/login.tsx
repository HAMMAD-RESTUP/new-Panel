import { useEffect, useState } from "react";
import BAButton from "../component/BAButton";
import BAInput from "../component/BAInput";
import { fbLogin,fbAuth } from "../config/firebasemethods";

import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };
  const navigate = useNavigate();

// useEffect(()=>{
//   fbAuth().then((res:any)=>{
//     navigate("/quiz")
//   })
//   .catch((err:any)=>{
//     console.log(err)
//   })

// },[])


  let LoginUser = () => {
    model.role = 'admin'
    console.log(model);
    fbLogin(model)
      .then((res:any) => {
        console.log(res)
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
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-3">
            <h1 className="text-3xl font-medium">Login</h1>
          </div>

          <div className="py-3">
            <BAInput
              value={model.email}
              onChange={(e:any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-4">
            <BAInput
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-4">
            <BAButton onClick={LoginUser} label="Login" />

              <Link className="bg-green-500 text-white font-bold text-center px-2 py-2  ml-10 rounded text-gray-50 hover:bg-green-700 no-underline text-lg ml-10 " to='/admin'>Create Account</Link>
          
          </div>
        </div>
      </div>
    </>
  );
}
