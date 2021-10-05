import React from 'react';
import { useParams } from 'react-router-dom';
import { translate } from 'search-api-adapter';
import useSWR from 'swr';

import { datasetFetcher } from '../App/SWRProvider';
import { Image, Box, Heading, Flex } from '../Primitives';
import Dataset from './Dataset';
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
  const { data } = useSWR(
    `/datasets/${datasetId}?filter=${query}`,
    datasetFetcher
  );

  return (
    <>
      <Heading as="h1" variant="display">
        {data.title}
      </Heading>
      <Flex
        pt={2}
        flexDirection={['column', 'column', 'row']}
        gap={[3, 3, 3, 4]}
      >
        <Box width={[1, 1, 4 / 7, 3 / 5]}>
          <Flex column gap={[3, 3, 3, 4]}>
            <DocumentMeta {...data} />
          </Flex>
        </Box>
        <Box width={[1, 1, 3 / 7, 2 / 5]} order={[-1, -1, 0]}>
          <Flex column gap={[1, 1, 2, 3]}>
            {data.datasets?.map((dataset) => (
              <Dataset key={dataset.pid} {...dataset} />
            ))}
          </Flex>
          <Box
            sx={{
              display: 'grid',
              gridGap: 3,
              gridTemplateColumns: [
                // eslint-disable-next-line sonarjs/no-duplicate-string
                '1fr 1fr 1fr',
                '1fr 1fr 1fr 1fr',
                '1fr 1fr',
                '1fr 1fr',
                '1fr 1fr',
              ],
            }}
          >
            {data.images.map((id, index) => (
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
