"use client";
import Login from "../../../components/auth/Login";

const login = () => {
  return (
    <>
      <div className="text-2xl pb-16 text-gray-900 font-semibold">로그인</div>
      <div>
        <Login />
      </div>
    </>
  );
};

export default login;
