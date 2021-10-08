import { useParams, useHistory, Link as RouterLink } from 'react-router-dom';

import { Card, Flex, Heading, Text } from '../Primitives';

function DatasetList(props) {
  const { datasets } = props;

  const history = useHistory();
  const { patientId, organ } = useParams();

  const filteredDatasets = datasets.filter(
    (d) =>
      d.parameters.samplePatient.number === patientId &&
      d.parameters.samplePatient.organName === organ
  );

  return (
    <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
      {filteredDatasets.map((dataset) => (
        <Card
          key={dataset.id}
          as={RouterLink}
          to={`/datasets/${encodeURIComponent(dataset.pid)}`}
          onClick={(evt) => {
            evt.preventDefault();
            history.push({
              pathname: `/datasets/${encodeURIComponent(dataset.pid)}`,
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
          <Heading as="h4">{dataset.title}</Heading>
          <Flex alignItems="center">
            <Text variant="keyword" mr={[1, 2]}>
              HiP-CT
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}

export default DatasetList;
