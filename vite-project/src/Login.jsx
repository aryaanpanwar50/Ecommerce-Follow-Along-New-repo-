

export default function Login() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,system-ui,sans-serif]">
            <div className="max-w-lg w-full">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Welcome Back
                    </h2>
                    <p className="mt-3 text-sm text-gray-500 font-medium">
                        Enter your credentials to continue
                    </p>
                </div>
                <form className="space-y-8 bg-zinc-950 p-10 rounded-2xl border border-zinc-800 shadow-xl">
                    <div className="space-y-6">
                        <div>
                            <label 
                                className="text-sm font-medium text-gray-400 block mb-2" 
                                htmlFor="email"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div>
                            <label 
                                className="text-sm font-medium text-gray-400 block mb-2" 
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-700 bg-black text-purple-500 focus:ring-purple-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                Remember me
                            </label>
                        </div>
                        <a 
                            href="#" 
                            className="text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transform transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
                    >
                        Sign in
                    </button>

                    <div className="text-center">
                        <span className="text-gray-500 text-sm">
                            New here?{' '}
                            <a href="#" className="text-purple-500 hover:text-purple-400 font-medium transition-colors">
                                Create an account
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}