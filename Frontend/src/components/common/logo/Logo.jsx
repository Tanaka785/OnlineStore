import { Box, Link, IconButton, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const route = "/";

export default function Logo() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing(0),
        marginLeft: {
          xs: theme.spacing(-1),
          sm: theme.spacing(-1),
        },
        overflow: "hidden",
      }}
    >
      {/* Logo Icon */}
      <Link href={route}>
        <IconButton
          sx={{
            p: { xs: 0.5, md: 1 },
          }}
        >
          <Box
            component="div"
            sx={{
              width: { xs: 32, md: 36 },
              height: { xs: 32, md: 36 },
              backgroundImage: `url('/Logo.png')`,
              backgroundSize: "110%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "50%",
            }}
          />
        </IconButton>
      </Link>

      {/* Logo Text */}
      <Link href={route}>
        <Typography
          variant="h6"
          noWrap={false}
          sx={{
            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
            letterSpacing: -1.2,
            lineHeight: 1,
            color: theme.palette.common.black,
            paddingRight: 1,
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          WebVibes
        </Typography>
      </Link>
    </Box>
  );
}
