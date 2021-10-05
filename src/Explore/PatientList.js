import { NavLink as RouterLink } from 'react-router-dom';

import { Box, Card, Heading, Text } from '../Primitives';

function PatientList(props) {
  const { patients } = props;

  return (
    <Box
      sx={{
        flex: '1 1 0%',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
      }}
    >
      {[...patients.entries()].map(([id, info]) => (
        <Card
          key={id}
          as={RouterLink}
          to={`/explore/${id}`}
          variant="card"
          sx={{
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
            {info.sex}, {info.age} yo, {info.weight} kg
          </Text>
        </Card>
      ))}
    </Box>
  );
}

export default PatientList;
