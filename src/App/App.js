import { useMediaQuery } from '@react-hookz/web';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DocumentPage from '../Document/DocumentPage';
import ExplorePage from '../Explore/ExplorePage';
import HomePage from '../Home/HomePage';
import { Box } from '../Primitives';
import SearchPage from '../Search/SearchPage';
import { breakpoints } from '../breakpoints';
import { useTheme } from '../theme';
import Boundary from './Boundary';
import GlobalStyles from './GlobalStyles';
import Navigation from './Navigation';
import ScrollToTop from './ScrollToTop';

function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints[1]})`);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Navigation />

      <Box
        mx="auto"
        mb={5}
        px={[3, 3, 3, 4]}
        pt={[0, 0, 0, 3]}
        maxWidth="100rem"
      >
        <Boundary resetKeys={[location]}>
          <Switch>
            <Route exact path="/">
              <ScrollToTop />
              <HomePage />
            </Route>
            <Route path="/explore">
              <ExplorePage />
            </Route>
            <Route exact path="/search">
              <SearchPage isDesktop={isDesktop} />
            </Route>
            <Route exact path="/datasets/:datasetId">
              <ScrollToTop />
              <DocumentPage />
            </Route>
          </Switch>
        </Boundary>
      </Box>
    </ThemeProvider>
  );
}

export default App;
