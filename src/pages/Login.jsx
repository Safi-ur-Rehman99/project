import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Heart } from 'lucide-react';
import { useToast } from '../components/Toast';
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'
import {app} from '../firebase.config'

const auth =getAuth(app)

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
 
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
       await signInWithEmailAndPassword(auth,email,password)
       .then((value)=>{addToast('Login successful!', 'success'),navigate('/')})
       .catch((error)=>{addToast('Login failed. Please check your credentials.', 'error')} ) 
    } catch (error) {
      addToast('Login failed. Please check your credentials.', 'error');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-pink-200/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
      
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">Kids Corner</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-gray-600">
            Or{' '}
            <Link to="/signup" className="text-primary hover:text-primary-dark font-medium">
              create a new account
            </Link>
          </p>
        </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/70 backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/70 backdrop-blur-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-secondary hover:text-secondary-dark font-medium">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
            
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105"
            >
            {isLoading?'Logging...':"Login"}
              
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white/70 backdrop-blur-sm text-sm font-medium text-gray-700 hover:bg-white/90 transition-all duration-200"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white/70 backdrop-blur-sm text-sm font-medium text-gray-700 hover:bg-white/90 transition-all duration-200"
              >
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;