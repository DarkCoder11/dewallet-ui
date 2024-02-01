import React from 'react';

import {FCC} from '~/types';
import {Footer, Header} from '~/components/views';

import {TMainLayoutProps} from './Main.types';

const MainLayout: FCC<TMainLayoutProps> = ({children}) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default MainLayout;
