import { useHistory, Link as RouterLink } from 'react-router-dom';

import { Card, Flex, Heading, Text } from '../Primitives';

const DATASETS = [
  { id: '10.5072/panosc-document1' },
  { id: '10.5072/panosc-document10' },
  { id: '10.5072/panosc-document11' },
];

function DatasetList() {
  const history = useHistory();

  return (
    <Flex gap={3} sx={{}}>
      {DATASETS.map((dataset) => (
        <Card
          key={dataset.id}
          as={RouterLink}
          to={`/datasets/${encodeURIComponent(dataset.id)}`}
          onClick={(evt) => {
            evt.preventDefault();
            history.push({
              pathname: `/datasets/${encodeURIComponent(dataset.id)}`,
              state: { canGoBack: true },
            });
          }}
          variant="card"
          sx={{
            borderRadius: 4,
            color: 'inherit',
            border: '2px solid',
            borderColor: 'middleground',
            textDecoration: 'none',
            '&:hover > h4': {
              textDecoration: 'underline',
            },
          }}
        >
          <Heading as="h4">{dataset.id}</Heading>
          <Flex alignItems="center">
            <Text variant="keyword" mr={[1, 2]}>
              HiP-CT
            </Text>
            <Text as="p">Volumes: 3</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}

export default DatasetList;
