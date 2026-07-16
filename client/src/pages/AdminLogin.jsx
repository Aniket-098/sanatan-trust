import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { loginAdmin } from "../api/adminApi";
import { isAuthenticated, setToken } from "../components/utils/auth";
const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/admin/dashboard", {
        replace: true,
      });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const { data } = await loginAdmin(form);

      setToken(data.token)

      // Store current login time
      localStorage.setItem(
        "lastLogin", 
        new Date().toISOString()
      );

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md">
        {/* Home Button */}

        <Link
          to="/"
          className="
    mb-6
    inline-flex
    items-center
    gap-2
    text-amber-400
    transition
    hover:text-amber-300
  "
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <form
          onSubmit={handleSubmit}
          className="
          rounded-2xl
          bg-slate-900
          p-8
          shadow-2xl
        "
        >
          <h1 className="text-center text-3xl font-bold text-white">
            Admin Login
          </h1>

          <p className="mt-2 text-center text-slate-400">Sign in to continue</p>

          <div className="mt-8 space-y-5">
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-amber-400
            "
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-amber-400
            "
            />
          </div>

          {error && <p className="mt-5 text-center text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="
            mt-8
            w-full
            rounded-xl
            bg-amber-500
            py-3
            font-semibold
            text-slate-900
            transition
            hover:bg-amber-400
            disabled:opacity-60
          "
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
