import React from "react";
import CartWidget from "./CartWidget";
import "./style.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
  Image,
  Divider
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box>
          <Image
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/640px-Adidas_Logo.svg.png"
          ></Image>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              <h2 id="cate">Categorias</h2>
            </MenuButton>
            <MenuList>
              <MenuItem>Hombre</MenuItem>
              <MenuItem>Mujer</MenuItem>
              <MenuItem>Niños</MenuItem>
              <MenuItem>Mostrar todo</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>
        
      </Flex>
      <Divider />

    </div>
  );
};

export default NavBar;
