import axios from "axios";
import { message } from "antd";



export const userLogin = (reqObj) => async (dispatch) => {
    console.log(reqObj)
    dispatch({ type: "LOADING", payload: true });
    try {
      await axios.post("/api/v1/auth/login", reqObj).then((res) => {
          console.log("successfull", res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          message.success("Login Success");
          dispatch({ type: "LOADING", payload: false });
          setTimeout(() => {
            window.location.href = "/";
          }, 500);
        })
        .catch((e) => {
          console.log("unsuccesfull", );
          dispatch({ type: "LOADING", payload: false });
          if(e.response.status === 500) return message.error("500 internal server error")
          message.error(e.response.data.message);
        });
    } catch (error) {
      console.log("catch block", error);
    }
  };

  export const userRegister = (reqObj) => async (dispatch) => {
  console.log('register',reqObj)
    dispatch({ type: "LOADING", payload: true });
    const email = reqObj.email;
    console.log('email:email')
    function err_userExists(){
      message.error('email already exists, please try another');
    }
    try {
      await axios.post("/api/v1/auth/register", reqObj).then((res)=>{
        localStorage.setItem("user", JSON.stringify(res.data));
        // console.log('API register user response:',res.data);
      })
      message.success("User Registerd successfully");
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("user Register catch block", error);
      dispatch({ type: "LOADING", payload: false });
      message.error('somethig went wrong')
    }
  };