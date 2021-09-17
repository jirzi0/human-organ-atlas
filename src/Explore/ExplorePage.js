import React from 'react';
import { Route } from 'react-router-dom';

import { Flex, Heading } from '../Primitives';
import DatasetList from './DatasetList';
import OrganList from './OrganList';
import PatientList from './PatientList';

function ExplorePage() {
  return (
    <Flex flexDirection="column" gap={[4, 4, 4, 5]} mb={7}>
      <Flex flexDirection={['column', 'column', 'row']} gap={[3, 3, 3, 4]}>
        <Heading variant="display" width={['auto', 'auto', '15%']}>
          Patients
        </Heading>
        <PatientList />
      </Flex>
      <Route path="/explore/:patientId">
        <Flex flexDirection={['column', 'column', 'row']} gap={[3, 3, 3, 4]}>
          <Heading variant="display" width={['auto', 'auto', '15%']}>
            Organs
          </Heading>
          <OrganList />
        </Flex>
      </Route>
      <Route path="/explore/:patientId/:organ">
        <Flex flexDirection={['column', 'column', 'row']} gap={[3, 3, 3, 4]}>
          <Heading variant="display" width={['auto', 'auto', '15%']}>
            Datasets
          </Heading>
          <DatasetList />
        </Flex>
      </Route>
    </Flex>
  );
}

export default ExplorePage;
