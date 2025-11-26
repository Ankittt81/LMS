export const signUpFormControls = [
  {
    name: "userName",
    label: "Name",
    placeholder: "Enter your Name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "E-mail",
    placeholder: "Enter your E-mail",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    type: "passsword",
    componentType: "input",
  },
];

export const signInFormControls = [
  
  {
    name: "userEmail",
    label: "E-mail",
    placeholder: "Enter your E-mail",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    type: "passsword",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};