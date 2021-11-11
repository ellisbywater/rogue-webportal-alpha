import DashboardLayout from "../layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";

export default function UpdateFieldCard({ fieldName }) {
  const passwordValidationSchema = Yup.object().shape({
    password: Yup.string()
      .required()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .when("password", {
        is: (password) => (password && password.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password doesn't match"
        ),
      }),
  });
  const pinValidationSchema = Yup.object().shape({
    pin: Yup.string()
      .required()
      .matches(
        /^.*(?=.{4,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Pin must contain at least 4 numbers"
      ),
    confirmPassword: Yup.string()
      .required("Please confirm your pin")
      .when("pin", {
        is: (pin) => (pin && pin.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("pin")], "Pin doesn't match"),
      }),
  });

  const fieldSchema =
    fieldName == "Pin" ? pinValidationSchema : passwordValidationSchema;

  const formOptions = { resolver: yupResolver(fieldSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded shadow-lg py-4 px-8 w-8/12 md:w-4/12 border-4 border-green-600">
        <ul className="p-6">
          <li className="my-6">
            <label className="text-sm leading-none text-gray-200" id="pin">
              {fieldName}
            </label>
            <input
              type="text"
              tabindex="0"
              className="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
              aria-labelledby="pin"
              placeholder={`Enter your ${fieldName}`}
            />
            <span className="font-semibold text-red-600 ">
              {fieldName == "Pin"
                ? errors.pin?.message
                : errors.password?.message}
            </span>
          </li>
          <li>
            <label
              className="text-sm leading-none text-gray-200"
              id="confirmpin">
              Confirm {fieldName}
            </label>
            <input
              type="text"
              tabindex="0"
              className="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
              aria-labelledby="confirm pin"
              placeholder={`Confirm your ${fieldName}`}
            />
            <span className="font-semibold text-red-600 ">
              {fieldName == "Pin"
                ? errors.confirmPin?.message
                : errors.confirmPassword?.message}
            </span>
          </li>
          <li>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                SAVE
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
