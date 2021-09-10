import { Card, Heading, Flex, Box } from '../Primitives';
import Filter from './Filter';

function FilterGroup(props) {
  const { title, filters } = props;

  return (
    <Card>
      <Flex column gap={[3, 2, 3, 4]}>
        <Box as="section">
          <Heading variant="filterGroup">{title}</Heading>
          <Flex column gap={3}>
            {filters.map((obj) => (
              <Filter key={obj.name} obj={obj} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
export default FilterGroup;
