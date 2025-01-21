import axios from "@/ultis/axiosInstance";

const postVerifyEmail = (user_email: string) => {
  return axios.post("verify_email", { user_email });
};

const postRegisterAccount = (
  user_name: string,
  user_pass: string,
  user_email: string,
  verification_code: string,
  account_type: string
) => {
  return axios.post("register_account", {
    user_name,
    user_pass,
    user_email,
    verification_code,
    account_type,
  });
};

const postLogin = (username: string, password: string) => {
  return axios.post("login-partner", {
    username,
    password,
  });
};

const postLogout = () => {
  return axios.post("logout");
};

const getSetCostToken = (costToken: number) => {
  return axios.get(`api/update_config?new_rate=${costToken}`);
};

const getCostToken = () => {
  return axios.get("api/get_cost_token");
};

export {
  postVerifyEmail,
  postRegisterAccount,
  postLogin,
  postLogout,
  getSetCostToken,
  getCostToken,
};
