import { Heading, Flex, Box } from '../Primitives';
import Filter from './Filter';

function FilterGroup(props) {
  const { title, filters } = props;

  return (
    <Box as="section">
      <Heading variant="filterGroup">{title}</Heading>
      <Flex column gap={3}>
        {filters.map((obj) => (
          <Filter key={obj.name} obj={obj} />
        ))}
      </Flex>
    </Box>
  );
}
export default FilterGroup;
