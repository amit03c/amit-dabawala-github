import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DefaultFooter from '../shared/DefaultFooter';
import DefaultHeader from '../shared/DefaultHeader';

const DefaultLayout = () => {

  return (
    <>
      <DefaultHeader/>
      <Outlet />
      <DefaultFooter/>
    </>
  );
};

export default DefaultLayout;