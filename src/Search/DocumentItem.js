import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { Card, Box, Flex, Image, Heading, Link, Text } from '../Primitives';

function DocumentItem(props) {
  // console.log(props);
  const { pid, title, parameters } = props;
  const { doi, startDate, definition, samplePatient } = parameters;

  const history = useHistory();
  const url = `/datasets/${encodeURIComponent(pid)}`;

  return (
    <Box
      as="article"
      sx={{
        display: ['block', 'flex'],
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        '@media (pointer: fine)': {
          ':hover h2': { textDecoration: ['none', 'underline'] },
        },
      }}
      onClick={() => {
        history.push({
          pathname: url,
          state: { canGoBack: true },
        });
      }}
    >
      <Box
        display={['block', 'none']}
        bg="middleground"
        height="10rem"
        overflow="hidden"
      >
        <Image
          src="https://source.unsplash.com/random/428x428"
          width="100%"
          height="100%"
        />
      </Box>

      <Card width={[1, 3 / 4, 3 / 4, 4 / 5]}>
        <Link
          as={RouterLink}
          to={url}
          onClick={(evt) => evt.preventDefault()} // let parent handler perform navigation
          noUnderline
        >
          <Heading>{title}</Heading>
        </Link>

        <Flex>
          <Text variant="keyword" mr={[1, 2]}>
            {definition}
          </Text>
          <Text variant="keyword" mr={[1, 2]}>
            {samplePatient.organName}
          </Text>
        </Flex>

        <Box
          as="p"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            '-webkit-line-clamp': ['5', '5', '3', '4', '4'],
            '-webkit-box-orient': 'vertical',
            mt: 3,
          }}
        >
          {doi.abstract}
        </Box>

        <Flex
          as="footer"
          gap={2}
          mt={2}
          fontStyle="italic"
          fontSize={[0, 0, 1, 1, 2]}
        >
          <Text>Created: {startDate}</Text>
          {/* <Text>Size: {documentSize(datasets)}</Text> */}
        </Flex>
      </Card>

      <Box
        display={['none', 'block']}
        width={[1, 1 / 4, 1 / 4, 1 / 5]}
        bg="middleground"
      >
        <Image
          width="100%"
          src="https://source.unsplash.com/random/428x428"
          minHeight="0"
        />
      </Box>
    </Box>
  );
}

export default DocumentItem;
