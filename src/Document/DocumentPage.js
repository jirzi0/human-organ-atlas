import { range } from 'lodash';
import React from 'react';
import { useParams } from 'react-router-dom';
import { translate } from 'search-api-adapter';
import useSWR from 'swr';

import { datasetFetcher } from '../App/SWRProvider';
import { Image, Box, Heading, Flex } from '../Primitives';
import DocumentMeta from './DocumentMeta';

function DocumentPage() {
  const query = translate([], {
    include: [
      // ['document'],
      ['techniques'],
      ['instrument'],
      ['samples'],
      ['parameters'],
      ['files'],
      // ['members', 'person'],
    ],
    limit: false,
  });

  const { datasetId } = useParams();
  const { data: dataset } = useSWR(
    `/datasets/${datasetId}?filter=${query}`,
    datasetFetcher
  );

  // console.log(dataset);
  const { images, parameters } = dataset;
  const { doi } = parameters;

  return (
    <>
      <Heading as="h1" variant="display">
        {doi.title}
      </Heading>
      <Flex
        pt={2}
        flexDirection={['column', 'column', 'row']}
        gap={[3, 3, 3, 4]}
      >
        <Box width={[1, 1, 4 / 7, 3 / 5]}>
          <Flex column gap={[3, 3, 3, 4]}>
            <DocumentMeta {...dataset} />
          </Flex>
        </Box>
        <Box width={[1, 1, 3 / 7, 2 / 5]} order={[-1, -1, 0]}>
          {/* <Flex column gap={[1, 1, 2, 3]}>
            {dataset.datasets?.map((dataset) => (
              <Dataset key={dataset.pid} {...dataset} />
            ))}
          </Flex> */}
          <Box
            sx={{
              display: 'grid',
              gridGap: 3,
              gridTemplateColumns: [
                '1fr 1fr 1fr',
                '1fr 1fr 1fr 1fr',
                '1fr 1fr',
                '1fr 1fr',
                '1fr 1fr',
              ],
            }}
          >
            {(images || range(0, 6)).map((id, index) => (
              <Image
                key={id}
                src={`https://source.unsplash.com/random/${428 + index}x428`}
              />
            ))}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default DocumentPage;
