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
};

export default Login;
