import React from 'react';

import { Flex, Text } from '../Primitives';

function MetaItem(props) {
  const { label, wide, children } = props;

  return (
    <Flex
      as="li"
      sx={{
        borderTop: '1px solid',
        ':last-child > div': { pb: [3, 3, 3, 4] },
      }}
    >
      <Text
        sx={{
          flex: `0 1 auto`,
          minWidth: wide ? '35%' : '25%',
          px: [3, 3, 3, 4],
          py: [2],
          borderRight: '1px solid',
          fontWeight: 'bold',
        }}
      >
        {label}
      </Text>
      <Text
        sx={{
          flex: '1 1 0%',
          px: [3, 3, 3, 4],
          py: [2],
          color: 'textVivid',
        }}
      >
        {children}
      </Text>
    </Flex>
  );
}

export default MetaItem;
