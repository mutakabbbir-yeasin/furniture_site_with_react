import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          console.log("user profile updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  // console.log(watch("name"));
  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid ">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>

        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                {...register("name", { required: true })}
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-800">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="name"
                {...register("photoUrl", { required: true })}
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-800">Photo Url is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-800">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {/* {errors.password && (
                <span className="text-red-800">Password is required</span>
              )} */}
              {errors.password?.type === "required" && (
                <p className="text-red-800">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-800">
                  Password must be more than 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-800">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-800">
                  Password must have one uppercase, one lowercase, one number
                  and one special character
                </p>
              )}
            </div>

            <div className="form-control mt-3">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="text-sm ps-7 pb-5">
            Already have an account?{" "}
            <Link className="text-orange-800" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
