const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md w-96">
        <h2 className="text-2xl mb-6">Login</h2>

        <input className="w-full p-3 mb-4 rounded bg-black/50" placeholder="Email" />
        <input type="password" className="w-full p-3 mb-6 rounded bg-black/50" placeholder="Password" />

        <button className="w-full bg-cyan-400 text-black py-3 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
