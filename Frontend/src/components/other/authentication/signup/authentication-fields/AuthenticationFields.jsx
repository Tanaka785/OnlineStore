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
  const { register, handleSubmit } = useForm();

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
          <StandardTextField {...register("email", { required: true })} label="Email" />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("usernameOrShopName", { required: true })}
            label={selectedCategory === "Customer" ? "Username" : "Shop name"}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <StandardTextField
            {...register("password", { required: true })}
            label="Password"
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox color="secondary" />}
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
