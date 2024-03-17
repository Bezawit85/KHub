import { TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import "./Login.css";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    auth.login({ userName, password });
  };

  return (
    <div>
      <div className="hero">
        <div className="conte">
          <div className="signin-form">
            <form onSubmit={loginHandler}>
              <Stack spacing={5} direction="column" sx={{ marginBottom: 10 }}>
                <TextField
                  type="text"
                  name="userName"
                  variant="filled"
                  label="User Name"
                  autoFocus={true}
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  fullWidth
                  minLength="5"
                  required
                />
                {"\n"}
                <TextField
                  type="password"
                  name="password"
                  variant="standard"
                  color="secondary"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  fullWidth
                  required
                />
              </Stack>
              <Button variant="outlined" color="secondary" type="submit">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
