import ListPicker from './ListPicker';
import OptionsPicker from './OptionsPicker';
import Range from './Range';
import TextInput from './TextInput';

const TEXT_OPERATORS = new Set([
  'ilike',
  'nilike',
  'like',
  'nlike',
  'regexp',
  'eq',
  'neq',
]);

function Filter(props) {
  const { obj } = props;

  if (obj.operator === 'between') {
    return <Range {...props} />;
  }

  if (obj.options) {
    return <OptionsPicker {...props} />;
  }

  if (obj.list) {
    return <ListPicker {...props} />;
  }

  if (TEXT_OPERATORS.has(obj.operator)) {
    return <TextInput {...props} />;
  }

  return null;
}

export default Filter;
