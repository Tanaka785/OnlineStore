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
  console.log(state);
  const { register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <CenteredBox sx={{ marginBlock: 4 }}>
      <FormControl sx={{ width: "100%", gap: 3 }}>
        <StandardTextField {...register("email")} label="Email" />
        <StandardTextField
          {...register("usernameOrShopName")}
          label={selectedCategory === "Customer" ? "Username" : "Shop name"}
        />
        <StandardTextField {...register("password")} label="Password" />
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
      </FormControl>
    </CenteredBox>
  );
}
