import React from 'react';

import { translate } from 'search-api-adapter';
import useSWR from 'swr';

import { Image, Box, Heading, Flex } from '../Primitives';
import Dataset from './Dataset';
import DocumentMeta from './DocumentMeta';

function DocumentPage(props) {
  const query = translate([], {
    include: [
      ['datasets', 'instrument'],
      ['members', 'person'],
      ['members', 'affiliation'],
    ],
    limit: false,
  });

  const documentId = props.match.params.documentId;
  const { data } = useSWR('/Documents/' + documentId + '?filter=' + query);

  return (
    <Flex flexDirection={['column', 'column', 'row']} gap={[3, 3, 3, 4]}>
      <Box width={[1, 1, 1 / 2]}>
        <Heading as="h1" variant="display">
          {data.title}
        </Heading>
        <DocumentMeta data={data} />
      </Box>
      <Box width={[1, 1, 1 / 4]}>
        <Heading variant="display">Datasets</Heading>
        <Flex column gap={[1, 1, 2, 3]}>
          {data.datasets?.map((dataset) => (
            <Dataset key={dataset.pid} {...dataset} />
          ))}
        </Flex>
      </Box>
      <Box width={[1, 1, 1 / 4]}>
        <Heading variant="display">Preview</Heading>
        <Image src={data.img} />
      </Box>
    </Flex>
  );
}

export default DocumentPage;