import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "../components/FormInput/FormInput";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password");

  function onSubmitForm(data) {
    console.log("signup data", data);
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isExisting = users.find((user) => user.email === data.email);
    if (isExisting) {
      toast.error("User with this email already exists.");
      return;
    }

    const newUser = {
      ...data,
      id: Date.now(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registered successfully!");
    navigate("/login");
  }

  function onErrors(errors) {
    console.log(errors);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <Toaster position="top-center" reverseOrder={false} />

        <div className="max-w-4xl w-full space-y-8 bg-white  shadow-lg flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 order-1 md:order-1">
            <div className="flex flex-col items-center gap-16">
              <img src="./logo.png" alt="logo" className="w-[50%]" />
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Signup
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmitForm, onErrors)}
              className="mt-8 space-y-6"
            >
              <FormInput
                label="User Name"
                id="userName"
                type="text"
                name="userName"
                register={register}
                rules={{ required: "user name is required" }}
                error={errors.userName}
              />
              <FormInput
                label="email"
                id="email"
                type="email"
                name="email"
                register={register}
                rules={{ required: "Email is required" }}
                error={errors.email}
              />
              <FormInput
                label="Password"
                id="password"
                type="password"
                name="password"
                register={register}
                rules={{ required: "Password is required" }}
                error={errors.password}
              />
              <FormInput
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                register={register}
                rules={{
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
                error={errors.confirmPassword}
              />
              <FormInput
                label="Country"
                id="country"
                name="country"
                register={register}
                rules={{ required: "Country is required" }}
                error={errors.country}
                options={[
                  { value: "us", label: "United States" },
                  { value: "eg", label: "Egypt" },
                  { value: "sa", label: "Saudi Arabia" },
                  { value: "uk", label: "United Kingdom" },
                ]}
              />

              <FormInput
                label="Phone Number"
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                register={register}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Enter a valid phone number",
                  },
                }}
                error={errors.phone}
              />
              <div>
                <button
                  type="submit"
                  className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          {/* Image container */}
          <div className="w-full md:w-1/2 bg-gray-200  order-2 md:order-2">
            <div className="h-full w-full flex items-center justify-center text-gray-500">
              <img src="./BG.png" alt="airplan image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
