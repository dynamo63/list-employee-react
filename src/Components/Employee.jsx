import React from 'react';

class ListEmployee extends React.Component{
    render(){
        const { employee,onDelete } = this.props;
        return (
            <tr>
                <th scope="row">{employee.name}</th>
                <td>{employee.surname}</td>
                <td>{employee.email}</td>
                <td>{employee.number}</td>
                <td><button className="btn btn-danger" onClick={() => onDelete(employee.id)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
    );
    }
}

export default ListEmployee;