import { Heading, Flex } from '../Primitives';

function OptionsPicker(props) {
  const { obj } = props;

  function toggleOption(option) {
    if (obj.value !== option || !obj.isActive) {
      obj.assocValue(option);
      if (!obj.isActive) {
        obj.toggleIsActive(1);
      }
    } else {
      obj.toggleIsActive(0);
    }
  }

  return (
    <Flex column>
      {obj.options.map((option) => (
        <Heading
          key={option}
          as="a"
          variant="small"
          onClick={() => toggleOption(option)}
          sx={{
            color: obj.isActive && obj.value === option ? 'heading' : 'text',
            fontSize: 0,
            fontWeight: obj.isActive && obj.value === option ? 'bold' : 'body',
            cursor: 'pointer',
          }}
        >
          {option}
        </Heading>
      ))}
    </Flex>
  );
}

export default OptionsPicker;