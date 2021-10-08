import { useParams, NavLink as RouterLink } from 'react-router-dom';

import { Box, Card, Heading, Image } from '../Primitives';

function OrganList(props) {
  const { datasets } = props;
  const { patientId } = useParams();

  const organs = new Set(
    datasets
      .filter((d) => d.parameters.samplePatient.number === patientId)
      .map((d) => d.parameters.samplePatient.organName)
  );

  return (
    <Box
      sx={{
        flex: '1 1 0%',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
      }}
    >
      {[...organs].map((organ) => (
        <Card
          key={organ}
          as={RouterLink}
          to={`/explore/${patientId}/${organ}`}
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
          <Heading as="h4">{organ}</Heading>
          <Image
            width="428"
            height="428"
            src={`https://source.unsplash.com/random/428x428?${organ}`}
            bg="secondary"
          />
        </Card>
      ))}
    </Box>
  );
}

export default OrganList;
