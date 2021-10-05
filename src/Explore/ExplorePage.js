import React from 'react';
import { Route } from 'react-router-dom';
import { translate } from 'search-api-adapter';
import useSWR from 'swr';

import { datasetsFetcher } from '../App/SWRProvider';
import { Flex, Heading } from '../Primitives';
import DatasetList from './DatasetList';
import OrganList from './OrganList';
import PatientList from './PatientList';

const QUERY_FILTER = translate(
  {},
  { include: [['instrument'], ['parameters']] }
);

function ExplorePage() {
  const { data } = useSWR(`/datasets?filter=${QUERY_FILTER}`, datasetsFetcher);

  const patients = new Map(
    data.map(({ patient }) => [patient.number, patient])
  );

  return (
    <Flex flexDirection="column" gap={[4, 4, 4, 5]} mb={7}>
      <Flex flexDirection={['column', 'column', 'row']} gap={[3, 3, 3, 4]}>
        <Heading variant="display" width={['auto', 'auto', '15%']}>
          Patients
        </Heading>
        <PatientList patients={patients} />
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
