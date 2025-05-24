import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
  Typography,
  Alert,
} from "@mui/material";
import StandardTextField from "./StandardTextField";
import CenteredBox from "../CenteredBox";
import SubmitButton from "./SubmitButton";
import { HOME, LOGIN } from "../../../../../constants/routes";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "../../../../../constants/config";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

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
});

const defaultValues = {
  email: "",
  usernameOrShopName: "",
  password: "",
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

function capitalizeFirst(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function AuthenticationFields({ selectedCategory }) {
  const [apiError, setApiError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setApiError("");
    try {
      const payload = {
        email: data.email,
        username: data.usernameOrShopName,
        password: data.password,
        customer_type: selectedCategory.toLowerCase(),
      };
      const response = await fetch(`${BASE_URL}/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let responseData = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
      if (response.status === 201) {
        navigate(`${HOME}`);
      } else {
        let errorMsg = "Signup failed. Please try again.";
        if (typeof responseData === "string" && responseData.trim() !== "") {
          errorMsg = responseData;
        } else if (responseData && typeof responseData === "object") {
          if (responseData.errors && typeof responseData.errors === "object") {
            const errorValues = Object.values(responseData.errors);
            if (errorValues.length > 0) {
              const firstError = errorValues[0];
              errorMsg = Array.isArray(firstError) ? firstError[0] : firstError;
            }
          } else {
            const fieldOrder = [
              "email",
              "username",
              "password",
              "customer_type",
            ];
            let found = false;
            for (const field of fieldOrder) {
              if (responseData[field]) {
                const val = responseData[field];
                errorMsg = Array.isArray(val) ? val[0] : val;
                found = true;
                break;
              }
            }
            if (!found) {
              if (responseData.non_field_errors) {
                errorMsg = Array.isArray(responseData.non_field_errors)
                  ? responseData.non_field_errors[0]
                  : responseData.non_field_errors;
              } else if (responseData.detail) {
                errorMsg = responseData.detail;
              } else if (
                responseData.message &&
                errorMsg === "Signup failed. Please try again."
              ) {
                errorMsg = responseData.message;
              }
            }
          }
        }
        setApiError(capitalizeFirst(errorMsg));
        console.log(errorMsg);
      }
    } catch (error) {
      setApiError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <CenteredBox sx={{ marginBlock: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
      >
        {apiError && (
          <Alert severity="error" sx={{ mb: 2, textAlign: "center" }}>
            {apiError}
          </Alert>
        )}
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
        <FormControlLabel
          control={<Checkbox color="secondary" disabled={isSubmitting} />}
          label="Email me special offers and artist news."
        />
        <SubmitButton
          text={isSubmitting ? "Signing Up..." : "Sign Up"}
          disabled={isSubmitting}
        />
      </Box>
      <Typography
        component={"div"}
        sx={{ width: "100%", textAlign: "center", marginTop: 4 }}
      >
        Already have an account?{" "}
        <Link href={LOGIN}>
          <b>Login</b>
        </Link>
      </Typography>
    </CenteredBox>
  );
}
