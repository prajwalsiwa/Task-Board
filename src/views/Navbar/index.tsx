import NavItem from '@Components/Navbar/NavItem';
import React from 'react';

function Navbar() {
  return (
    <div className="flex h-14 w-full items-center border bg-gradient-to-r from-gray-800 to-gray-400 px-6">
      <NavItem />
    </div>
  );
}

export default Navbar;
