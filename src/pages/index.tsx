import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { sideMenuToggleState } from '@/states/states';

export default function HomePage() {
  const show = useRecoilValue(sideMenuToggleState);
  return <h1>{show}</h1>;
}
