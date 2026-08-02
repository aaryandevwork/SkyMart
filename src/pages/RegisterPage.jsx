import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User, Zap } from "lucide-react";
import PasswordStrengthChecker from "../components/PasswordStrengthChecker";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    registerFormSubmit,
    errors,
    navigate,
    watch,
  } = useAuth();
  const [passwordFocused, setPasswordFocused] = useState(false);
  const password = watch("password");

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8F400] text-black shadow-[0_0_30px_rgba(196,255,0,.25)]">
          <Zap size={16} fill="currentColor" />
        </div>

        <h1 className="text-xl font-syne font-bold">
          <span className="text-white">Sky</span>
          <span className="text-[#C8F400]">Mart</span>
        </h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] px-8 py-7 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
        <h2 className="text-2xl font-syne font-bold tracking-tight text-white">
          Create account
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Join SkyMart and start shopping
        </p>

        <form
          onSubmit={handleSubmit(registerFormSubmit)}
          className="mt-8 space-y-4"
        >
          {/* Name */}
          <div>
            <div className="flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-[#C8F400]">
              <User className="text-zinc-500" size={18} />

              <input
                {...register("name", {
                  required: "name is required",
                })}
                type="text"
                placeholder="Full name"
                className="ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-[#C8F400]">
              <Mail className="text-zinc-500" size={18} />

              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email"
                placeholder="Email address"
                className="ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-[#C8F400]">
              <Lock className="text-zinc-500" size={18} />

              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "minimum 6 digit password required",
                  },
                })}
                onFocus={() => setPasswordFocused(!passwordFocused)}
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-zinc-500" />
                ) : (
                  <Eye size={18} className="text-zinc-500" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
            <PasswordStrengthChecker
              password={password}
              passwordFocused={passwordFocused}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-[#C8F400]">
              <Lock className="text-zinc-500" size={18} />

              <input
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500"
              />
            </div>

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={() => navigate("/main")}
            className="group mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#C8F400] text-md py-3 font-syne font-bold text-black transition-all duration-300 hover:bg-[#C8F400] cursor-pointer"
          >
            Create Account
            <ArrowRight size={20} />
          </button>
        </form>

        <p className="mt-6 text-center text-md text-zinc-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="font-semibold text-sm text-[#C8F400] cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
