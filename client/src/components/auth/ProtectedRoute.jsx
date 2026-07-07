import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { verifyAdmin } from "../../api/adminApi";
import { removeToken } from "../utils/auth";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyAdmin();

        setAuthenticated(true);

      } catch (error) {

        removeToken();

        setAuthenticated(false);

      } finally {

        setLoading(false);

      }
    };

    verify();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
  <div className="flex items-center gap-3 text-white">
    <Loader2
      className="animate-spin"
      size={22}
    />
    Checking authentication...
  </div>
</div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;