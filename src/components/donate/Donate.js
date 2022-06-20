import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Link } from "react-router-dom";
const Donate = () => {
  const [show, setShow] = useState(true);
  const showHadler = () => {
    setShow(!show);
  
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        onClick={showHadler}
        fontSize={'30px'}
        w={'30%'}
        // bg={'navy'}
        // color={'white'}
        p={8 }
        
      >
        Donate
      </MenuButton>
      <MenuList fontSize={'20px'}>
        <Link to="/signin">
          <MenuItem>Esewa</MenuItem>
        </Link>
        <Link to="/signin">
          <MenuItem>Khalti</MenuItem>
        </Link>
        <Link to="/signin">
          <MenuItem>IME pay</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default Donate;
