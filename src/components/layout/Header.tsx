import * as React from 'react';

import NavItems from './Navitems';

export default function Header() {
  return (
    <header className=' sticky h-12 md:h-12'>
      <NavItems />
    </header>
  );
}
