import { useParams, NavLink as RouterLink } from 'react-router-dom';

import { Box, Card, Heading, Image } from '../Primitives';

const ORGANS = [{ name: 'lung' }, { name: 'brain' }, { name: 'heart' }];

function OrganList() {
  const { patientId } = useParams();

  return (
    <Box
      sx={{
        flex: '1 1 0%',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
      }}
    >
      {ORGANS.map((organ) => (
        <Card
          key={organ.id}
          as={RouterLink}
          to={`/explore/${patientId}/${organ.name}`}
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
          <Heading as="h4">{organ.name}</Heading>
          <Image
            width="428"
            height="428"
            src={`https://source.unsplash.com/random/428x428?${organ.name}`}
            bg="secondary"
          />
        </Card>
      ))}
    </Box>
  );
}

export default OrganList;
