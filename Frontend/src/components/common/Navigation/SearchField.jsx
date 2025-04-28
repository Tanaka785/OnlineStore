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
        }}
      >
        {/* TODO increase the height of the TextField. */}
        <TextField
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ minWidth: 30, minHeight: 30, color: theme.palette.text.primary }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    );
}