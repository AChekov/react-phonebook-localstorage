import { InputFilter, LabelFilter } from './Filter.styled';
import { PropTypes } from 'prop-types';

const Filter = ({ filter, onChange }) => (
  <LabelFilter>
    <InputFilter
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={onChange}
    />
  </LabelFilter>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
