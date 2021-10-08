import { NavLink as RouterLink } from 'react-router-dom';

import { Flex, Card, Heading, Text } from '../Primitives';

function PatientList(props) {
  const { datasets } = props;

  const patients = new Map(
    datasets.map((d) => [
      d.parameters.samplePatient.number,
      d.parameters.samplePatient,
    ])
  );

  return (
    <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
      {[...patients.entries()].map(([id, info]) => (
        <Card
          key={id}
          as={RouterLink}
          to={`/explore/${id}`}
          variant="card"
          sx={{
            minWidth: '250px',
            borderRadius: 4,
            color: 'inherit',
            border: '2px solid',
            borderColor: 'middleground',
            textDecoration: 'none',
            '&:hover': {
              bg: 'foreground',
              borderColor: 'foreground',
            },
            '&.active': {
              bg: 'foreground',
              borderColor: 'bgInverted',
            },
          }}
        >
          <Heading as="h3">{id}</Heading>
          <Text>
            {info.sex}, {info.age} yo
          </Text>
        </Card>
      ))}
    </Flex>
  );
}

export default PatientList;
