import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Paper
} from "@mui/material";
import { useState } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const onSubmit = (data) => {
    setSuccess("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Login Successful!");
    }, 1500);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)"
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center"
        }}
      >
        <Typography variant="h4" mb={2} color="white">
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email"
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{
            input: { color: "white" },
            label: { color: "#ccc" }
          }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 6,
              message: "Min 6 characters"
            }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{
            input: { color: "white" },
            label: { color: "#ccc" }
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            height: 45,
            fontWeight: "bold",
            background: "linear-gradient(45deg, #2563eb, #3b82f6)"
          }}
          onClick={handleSubmit(onSubmit)}
        >
          {loading ? <CircularProgress size={24} /> : "LOGIN"}
        </Button>

        {success && (
          <Typography mt={2} color="lightgreen">
            {success}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default Login;