import * as React from 'react';

import NavItems from './Navitems';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-12 md:h-12'>
      <NavItems />
    </header>
  );
}
