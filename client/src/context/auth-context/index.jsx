import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { registerService,loginService, checkAuthService } from "@/services/auth-Service";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth,setAuth]=useState({
    authenticate:false,
    user:null
  })

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);

    if(data.success){
      sessionStorage.setItem("accessToken",JSON.stringify(data.data.accessToken))
      setAuth({
        authenticate:true,
        user:data.data.user
      })
    }else{
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  async function checkAuthUser(){
    const data=await checkAuthService()

    if(data.success){
      setAuth({
        authenticate:true,
        user:data.data.user
      })
    }else{
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  //check-auth
  useEffect(()=>{
    checkAuthUser()
  },[])

  console.log("auth context",auth)

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
