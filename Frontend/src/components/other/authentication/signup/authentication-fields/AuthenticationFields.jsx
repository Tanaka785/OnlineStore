import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import StandardTextField from "./StandardTextField";
import CenteredBox from "../CenteredBox";
import SubmitButton from "./SubmitButton";
import { LOGIN } from "../../../../../constants/routes";
import { useForm } from "react-hook-form";

export default function AuthenticationFields({ selectedCategory, state, setState }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <CenteredBox sx={{ marginBlock: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("usernameOrShopName", {
              required:
                selectedCategory === "Customer"
                  ? "Username is required"
                  : "Shop name is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Must not exceed 20 characters",
              },
              pattern: {
                value: /^[A-Za-z0-9_-]*$/,
                message:
                  "Only letters, numbers, underscores and hyphens are allowed",
              },
            })}
            label={selectedCategory === "Customer" ? "Username" : "Shop name"}
            error={!!errors.usernameOrShopName}
            helperText={errors.usernameOrShopName?.message}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must contain at least one letter, one number and one special character",
              },
            })}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox {...register("specialOffers")} color="secondary" />
          }
          label="Email me special offers and artist news."
        />
        <SubmitButton text="Sign Up" />
        <Typography
          component={"div"}
          sx={{ width: "100%", textAlign: "center" }}
        >
          Already have an account?{" "}
          <Link href={LOGIN}>
            <b>Login</b>
          </Link>
        </Typography>
      </Box>
    </CenteredBox>
  );
}
