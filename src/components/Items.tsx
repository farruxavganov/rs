import { Component } from 'react';
import Item from './Item';

interface Props {
  children?: React.ReactNode;
  results: object[];
  paginationArray: number[];
  handleSubmit(value?: string, pageNumber?: number): void;
}

class Items extends Component<Props> {
  render() {
    const { results } = this.props;
    return (
      <>
        <ul>
          {results &&
            results.map((item, index) => (
              <li key={index}>
                <Item item={item} />
              </li>
            ))}
        </ul>
        <div>
          {this.props.paginationArray.map((num) => (
            <button
              onClick={() => this.props.handleSubmit('', num + 1)}
              key={num}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default Items;
