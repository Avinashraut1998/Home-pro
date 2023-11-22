import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setUser, user } = useContext(MyContext);
  let navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Drawer anchor="left" open={true}>
        <Box sx={{ minWidth: 150, maxWidth: 200 }}>
          <List>hiii {user.name}</List>
          <List>
            <Button
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Log Out
            </Button>
          </List>
        </Box>
      </Drawer>
      <div style={{ marginLeft: 200, padding: 16 }}>
        <AppBar sx={{ width: "100%" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Home;
