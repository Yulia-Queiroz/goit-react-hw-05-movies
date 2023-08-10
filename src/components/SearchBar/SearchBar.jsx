import PropTypes from 'prop-types';
import { Form, Input, Section, SubmitButton } from './SearchBarStyles';

const SearchBar = ({ onSubmit }) => {
  return (
    <Section>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="movieTitle"
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </Form>
    </Section>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
