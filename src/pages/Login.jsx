import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "../components/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userSlice";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(data) {
    console.log("submit", data);
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    const matchedUser = allUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (matchedUser) {
      dispatch(loginUser(matchedUser));
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid Email or Password");
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <Toaster position="top-center" reverseOrder={false} />

        <div className="max-w-4xl w-full rounded-2xl h-[600px] space-y-8 bg-white  shadow-lg flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 order-1 md:order-1">
            <div className="flex flex-col items-center gap-16">
              <img src="./logo.png" alt="logo" className="w-[50%]" />
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Login
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="space-y-4">
                <FormInput
                  label="Email"
                  id="email"
                  type="email"
                  name="email"
                  register={register}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  }}
                  error={errors.email}
                />

                <FormInput
                  label="Password"
                  id="password"
                  type="password"
                  name="password"
                  register={register}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters or digits",
                    },
                  }}
                  error={errors.password}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>

          {/* Image container */}
          <div className="hidden md:block w-full md:w-1/2 bg-gray-200 order-2 md:order-2">
            <div className="h-full w-full flex items-center justify-center text-gray-500">
              <img
                src="./BG.png"
                alt="airplane image"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
