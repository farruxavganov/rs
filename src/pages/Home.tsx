import { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Items from '../components/Items';

interface Props {
  childern?: React.ReactNode;
}

interface State {
  results: object[];
}

class Home extends Component<Props, State> {
  pagination: number[];
  constructor(props: Props) {
    super(props);
    this.state = {
      results: [],
    };
    this.pagination = [];
    this.getItems = this.getItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getItems(value?: string, pageNumber: number = 1) {
    fetch(
      `https://swapi.dev/api/vehicles/${
        value
          ? '?search=' + value + '&page=' + pageNumber
          : '?page=' + pageNumber
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.results,
        });
        this.pagination = Array.from(
          { length: Math.ceil(data.count / 10) },
          (_, index) => index
        );
      });
  }

  handleSubmit(value?: string, pageNumber?: number) {
    this.getItems(value, pageNumber);
  }

  componentDidMount() {
    this.getItems();
  }
  render() {
    const { results } = this.state;
    return (
      <div className="container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <hr />
        <Items
          results={results}
          paginationArray={this.pagination}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Home;
