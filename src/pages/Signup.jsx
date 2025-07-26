import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Heart } from "lucide-react";
import { useToast } from "../components/Toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase.config";
const auth = getAuth(app);

const Signup = () => {
  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // your own loading flag
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (password !== confirmPassword) {
      addToast("Passwords do not match", "error");
      return;
    }
    if (!agreeToTerms) {
      addToast("Please agree to the terms and conditions", "error");
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      addToast("Account created suc cessfully!", "success");
      navigate("/");
    } catch (error) {
      console.error(error);
      addToast("Signup failed. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background gradients & decorations… */}
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">
                Kids Corner
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-primary-dark font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-secondary bg-white/70 backdrop-blur-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-secondary bg-white/70 backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-3 pr-12 border rounded-xl shadow-sm focus:ring-secondary bg-white/70 backdrop-blur-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <div className="relative mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="block w-full px-4 py-3 pr-12 border rounded-xl shadow-sm focus:ring-secondary bg-white/70 backdrop-blur-sm"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirm ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-4 text-secondary rounded"
              />
              <label
                htmlFor="agree-terms"
                className="ml-2 text-sm text-gray-900"
              >
                I agree to the{" "}
                <a href="#" className="text-primary hover:text-primary-dark">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:text-primary-dark">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full flex justify-center py-3 px-6 text-white bg-gradient-to-r from-primary to-secondary rounded-xl disabled:opacity-50"
              >
                {isLoading ? "Creating account…" : "Create account"}
              </button>
            </div>

            {/* Or continue with */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="py-3 px-4 border rounded-xl shadow-sm"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="py-3 px-4 border rounded-xl shadow-sm"
                >
                  Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
