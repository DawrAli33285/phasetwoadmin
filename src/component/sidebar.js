import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Spacer, Link as ChakraLink, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };
    return (
    <>
      <div className='block lg:hidden'>
        <Flex as="nav" bg="gray" align="center" color="white" px={[4, 6, 8]} py={[3, 4, 5]} className='px-[20px]'>
          <Box>
            <Link to="/" className="text-lg font-bold">Admin Panel</Link>
          </Box>
          <Spacer />
          <Box className='flex  items-center gap-[20px]'>
            {isOpen ? (<RxCross2 onClick={() => { setIsOpen(!isOpen) }} />) : (<GiHamburgerMenu onClick={() => { setIsOpen(!isOpen) }} />)}
          </Box>
        </Flex>
      </div>
      <div className='lg:block  hidden w-full'>
        <div className='flex fixed shadow-lg flex-col bg-white h-screen p-[30px] gap-[20px]'>   
            <ChakraLink as={Link} to="/jobs" mr="4" className='hover:text-gray-300 '>Jobs</ChakraLink>
            <ChakraLink as={Link} to="/create-category" mr="4" className='   hover:text-gray-300'>Create Category</ChakraLink>
            <ChakraLink as={Link} to="/create-job" mr="4" className='hover:text-gray-300'>Create Job</ChakraLink>
            <ChakraLink as={Link} to="/privacy-page-content" mr="4" className='hover:text-gray-300'>Privacy Page Content</ChakraLink>
            <ChakraLink as={Link} to="/terms-and-conditions" mr="4" className='hover:text-gray-300'>Terms and Conditions</ChakraLink>
            <ChakraLink as={Link} to="/home-page-content" className='hover:text-gray-00'>Home Page Content</ChakraLink>
            <ChakraLink as={Link} to="/chatpage" mr="4" className='hover:text-gray-300'>Messages</ChakraLink>
            <ChakraLink as={Link} to="/contact-reply" mr="4" className='hover:text-gray-300'>Contact Reply</ChakraLink>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white w-fit  z-50">
         
          <div className="flex flex-col items-start p-4 gap-4 text-black" onClick={(e) => e.stopPropagation()}>
            <Link to="/jobs" className="hover:text-gray-300 "onClick={closeDrawer}>Jobs</Link>
            <Link to="/create-category" className="hover:text-gray-300" onClick={closeDrawer}>Create Category</Link>
            <Link to="/create-job" className="hover:text-gray-300" onClick={closeDrawer}>Create Job</Link>
            <Link to="/privacy-page-content" className="hover:text-gray-300" onClick={closeDrawer}>Privacy Page Content</Link>
            <Link to="/terms-and-conditions" className="hover:text-gray-300" onClick={closeDrawer}>Terms and Conditions</Link>
            <Link to="/home-page-content" className="hover:text-gray-300" onClick={closeDrawer}>Home Page Content</Link>
            <Link to="/chatpage" className="hover:text-gray-300" onClick={closeDrawer}>Messages</Link>
            <Link to="/contact-reply" className="hover:text-gray-300" onClick={closeDrawer}>Contact Reply</Link>
          </div>
        </div>
)}
    </>
  );
};

export default Header;
