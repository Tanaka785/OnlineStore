import { Box, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
export default function SearchField() {
    const theme = useTheme();
    return (
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          marginInline: theme.spacing(1),
          display: { xs: "flex", sm: "flex", md: "none" },
        }}
      >
        <TextField
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ minWidth: 30, minHeight: 30 }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    );
}