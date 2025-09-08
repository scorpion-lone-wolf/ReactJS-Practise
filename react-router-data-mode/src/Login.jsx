// Login.jsx
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

function Login() {
  const [userName, setuserName] = useState("");
  const fetcher = useFetcher();

  // Clear input after successful submission
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data != null) {
      setuserName("");
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <fetcher.Form className="space-y-4" action="/login" method="post">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={e => setuserName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your user name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default Login;
