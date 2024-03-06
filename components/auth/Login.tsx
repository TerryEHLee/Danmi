import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../../libs/supabase";

interface FormValue {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const loginButtonHandler: SubmitHandler<FormValue> = async (
    data: FormValue,
  ) => {
    const { email, password } = data;
    const { data: loginData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(loginButtonHandler)}>
          <div className="pt-16 flex flex-col items-center gap-4 self-stretch">
            <div className="flex flex-grow flex-col">
              <input
                type="email"
                placeholder="이니셜 입력"
                {...register("email", {
                  required: "이니셜을 입력하세요",
                })}
                className="flex w-80 h-12 p-4 items-center border rounded-xl bg-gray-50 mb-1 outline-none text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-grow flex-col">
            <input
              type="password"
              placeholder="비밀번호 입력"
              {...register("password", {
                required: "비밀번호를 입력하세요",
                minLength: {
                  value: 4,
                  message: "비밀번호는 최소 4자리 이상이어야 합니다",
                },
              })}
              className="flex w-80 h-12 p-4 items-center border rounded-xl bg-gray-50 mb-1 outline-none text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-80 h-12 p-4 justify-center items-center border rounded-xl bg-gray-900 text-white hover:bg-gray-700"
          >
            로그인
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
