import React from 'react'
import Employee from './Emlpoyee';

class ListEmployees extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hits: [],
      };
      this.reloadData = this.reloadData.bind(this);
    }

    componentDidMount() {

      fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ hits: data, isLoading: false }));
    }

    reloadData() {

      fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ hits: data, isLoading: false }));
    }
    
    render() {
        const hits = this.state.hits;
        const listItems = hits.map((hit) =>
            <li key={"row"+hit.id}>
                <Employee key={hit.id} name={hit.name} age={hit.age} active={hit.isActive} />
            </li>);
        return(
            <div>
                <p>Employees:</p>
                <ul>{listItems}</ul>
            </div>
        );
    }
}
export default ListEmployees;