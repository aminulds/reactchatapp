import { Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data/index';

const DashboardLayout = () => {
  const theme = useTheme();

  const [navSelect, setNavSelect] = useState(0);

  return (
    <>
      <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0 0 2px rgba(0,0,0,0.25)", height: '100vh', width: 100 }}>
        <Stack spacing={3} direction="column" alignItems="center" width="100%">
          <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
            <img src={logo} alt="Logo" />
          </Box>
          <Stack sx={{ width: "max-content", alignItems: "center", }} spacing={3}>
            {Nav_Buttons.map((item) => (
              item.index === navSelect ?
                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, }}>
                  <IconButton sx={{ width: "max-content", color: '#fff' }} key={item.index}>
                    {item.icon}
                  </IconButton>
                </Box>
                : <IconButton
                  onClick={() => setNavSelect(item.index)}
                  sx={{ width: "max-content", color: '#000' }} key={item.index}>
                  {item.icon}
                </IconButton>
            ))}

            <Divider sx={{ width: "48px" }} />
            {navSelect === 3 ?
              <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, }}>
                <IconButton sx={{ width: "max-content", color: '#fff' }}>
                  <Gear />
                </IconButton>
              </Box> :
              <IconButton
                onClick={() => setNavSelect(3)}
                sx={{ width: "max-content", color: '#000' }}>
                <Gear />
              </IconButton>
            }
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
