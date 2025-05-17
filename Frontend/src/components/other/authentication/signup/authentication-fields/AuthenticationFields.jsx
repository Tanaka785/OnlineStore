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
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      usernameOrShopName: "",
      password: "",
      specialOffers: false, // for the checkbox
    },
  });

  const onSubmit = async (data) => {
    // TODO use setError of react-hook-form when you integrate the backend.
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
    } catch (error) {
      console.error("Submission error:", error);
    }
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
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={
              (errors.email?.type === "required" && "Email is required") ||
              (errors.email?.type === "pattern" && "Please enter a valid email")
            }
            disabled={isSubmitting}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("usernameOrShopName", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z0-9_-]*$/,
            })}
            type="text"
            label={selectedCategory === "Customer" ? "Username" : "Shop name"}
            error={!!errors.usernameOrShopName}
            helperText={
              (errors.usernameOrShopName?.type === "required" &&
                "This field is required") ||
              (errors.usernameOrShopName?.type === "minLength" &&
                "Minimum 3 characters required") ||
              (errors.usernameOrShopName?.type === "maxLength" &&
                "Maximum 20 characters allowed") ||
              (errors.usernameOrShopName?.type === "pattern" &&
                "Only letters, numbers, underscores and hyphens allowed")
            }
            disabled={isSubmitting}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            })}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={
              (errors.password?.type === "required" &&
                "Password is required") ||
              (errors.password?.type === "minLength" &&
                "Password must be at least 8 characters") ||
              (errors.password?.type === "pattern" &&
                "Password must contain at least one letter, one number and one special character")
            }
            disabled={isSubmitting}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              {...register("specialOffers")}
              color="secondary"
              disabled={isSubmitting}
            />
          }
          label="Email me special offers and artist news."
        />
        <SubmitButton
          text={isSubmitting ? "Signing Up..." : "Sign Up"}
          disabled={isSubmitting}
        />
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
