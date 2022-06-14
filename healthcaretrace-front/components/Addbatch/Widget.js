import React from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

const options = [
    { value: 'one', label: 'matière 1' },
    { value: 'two', label: 'matière 2' },
    { value: 'two', label: 'produit 1' },
];

class Widget extends React.Component {
  state = {
      selected: ['one'],
  };

  onChange = (selected) => {
      this.setState({ selected });
  };

  render() {
      const { selected } = this.state;

      return (
          <DualListBox 
              options={options}
              selected={selected}
              onChange={this.onChange}
              icons = {{
                moveLeft: "<",
                moveAllLeft: "<<",
                moveRight: ">",
                moveAllRight: ">>"
              }}
              canFilter={true}
              showNoOptionsText={true}
          />
      );
  }
}

export default Widget;