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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "../../../../../constants/config";
const signupSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  usernameOrShopName: z
    .string()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must not exceed 20 characters")
    .regex(
      /^[A-Za-z0-9_-]*$/,
      "Only letters, numbers, underscores and hyphens allowed"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/,
      "Password must contain at least one letter, one number and one special character"
    ),
  specialOffers: z.boolean().default(false),
});

const defaultValues = {
  email: "",
  usernameOrShopName: "",
  password: "",
  specialOffers: false,
};

const formFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "usernameOrShopName",
    label: "Username",
    type: "text",
    getLabelText: (selectedCategory) =>
      selectedCategory === "Customer" ? "Username" : "Shop name",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export default function AuthenticationFields({
  selectedCategory,
  state,
  setState,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        category: selectedCategory,
      };

      await fetch(`${BASE_URL}/api/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
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
        {formFields.map((field) => (
          <FormControl key={field.name} sx={{ width: "100%" }}>
            <StandardTextField
              {...register(field.name)}
              label={
                field.getLabelText
                  ? field.getLabelText(selectedCategory)
                  : field.label
              }
              type={field.type}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              disabled={isSubmitting}
            />
          </FormControl>
        ))}
        {/* TODO ask Ai why i didn't add this checkbox to the formfields since it is part of the form */}
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
