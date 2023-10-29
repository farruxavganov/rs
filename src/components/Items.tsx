import { Component } from 'react';
import Item from './Item';

interface Props {
  children: React.ReactNode;
  results: Array<{ name: string; model: string }>;
  paginationArray: Array<number>;
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
                <Item item={{ name: item.name, model: item.model }} />
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
