import { Component } from 'react';

interface Props {
  children?: React.ReactNode;
  handleSubmit(value?: string, pageNumber?: number): void;
}

interface State {
  input: string;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const { input: inputValue } = this.state;
    return (
      <header>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
            value={inputValue}
          />
          <button
            onClick={() => this.props.handleSubmit(inputValue)}
            type="button"
          >
            Search
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
