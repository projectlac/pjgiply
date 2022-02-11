
import { useState } from 'react';
import Navbar from '../../components/Common/Navbar';
import Saved from '../../components/Layout/Saved';
import SearchIndex from '../../components/Layout/SearchIndex';

import Container from '@mui/material/Container';
export function Search() {
  const [currentTab, setCurrentTab] = useState(true)
  const handleChangeTab = (bool) => {
    setCurrentTab(bool)
  }

  return (
    <div>
      <Navbar handleChangeTab={handleChangeTab} />
      <Container maxWidth="xl">
        {currentTab ? (<SearchIndex />) : (<Saved />)}
      </Container>

    </div>
  );
}
