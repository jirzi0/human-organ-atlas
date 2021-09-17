import { NavLink as RouterLink } from 'react-router-dom';

import { Box, Card, Heading, Text } from '../Primitives';

const PATIENTS = [
  { id: 'LADAF-2020-27', sex: 'male', age: 82 },
  { id: 'LADAF-2020-34', sex: 'female', age: 67 },
  { id: 'LADAF-2020-52', sex: 'female', age: 98 },
  { id: 'LADAF-2021-01', sex: 'male', age: 90 },
  { id: 'LADAF-2021-12', sex: 'female', age: 56 },
  { id: 'LADAF-2020-520', sex: 'female', age: 98 },
  { id: 'LADAF-2021-010', sex: 'male', age: 90 },
];

function PatientList() {
  return (
    <Box
      sx={{
        flex: '1 1 0%',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
      }}
    >
      {PATIENTS.map((patient) => (
        <Card
          key={patient.id}
          as={RouterLink}
          to={`/explore/${patient.id}`}
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
          <Heading as="h3">{patient.id}</Heading>
          <Text>
            {patient.sex}, {patient.age} yo
          </Text>
        </Card>
      ))}
    </Box>
  );
}

export default PatientList;
