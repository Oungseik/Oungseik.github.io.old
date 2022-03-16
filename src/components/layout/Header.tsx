import * as React from 'react';

import NavItems from './Navitems';

export default function Header() {
  return (
    <header className='hidden h-16 border-b md:block'>
      <NavItems />
    </header>
  );
}
