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

export default function AuthenticationFields({ selectedCategory, state, setState }) {
  console.log(state);

  const handleEmailChange = () => {
    console.log("I Email");
  }

  const handleUsernameOrShopNameChange = () => {
    console.log("I UsernameOrShopName");
  };

  const handlePasswordChange = () => {
    console.log("I Password");
  };

  return (
    <CenteredBox sx={{ marginBlock: 4 }}>
      <FormControl sx={{ width: "100%", gap: 3 }}>
        <StandardTextField label="Email" onChange={handleEmailChange} />
        <StandardTextField
          label={selectedCategory === "Customer" ? "Username" : "Shop name"}
          onChange={handleUsernameOrShopNameChange}
        />
        <StandardTextField label="Password" onChange={handlePasswordChange} />
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
