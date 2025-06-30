import { AuthContext } from "../Context/AuthContext";

function AuthProvider({ children }) {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
