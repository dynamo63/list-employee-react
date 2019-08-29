import React, {Component} from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';


class App extends Component{

    state = {
        lists:[
            {id:1, name:"Dynamo", surname:"Poupre", email:"dynamo63@gmail.com",number:"+24107799876"},
            {id:2, name:"Sabil", surname:"Mohammed", email:"sabilmouckeytou@gmail.com",number:"+24106192844"}
        ],
        isCliked:false
    };

    handleAddEmployee = (id, name, surname, email, number) =>{
        const employee = {id:id, name:name, surname:surname, email:email, number:number};
        const { lists } = this.state;
        lists.push(employee);
        this.setState({ lists });
    }

    handleClick = ()=>{
        //renvoie toujours le contraire, ainsi a chaque clic on permute
        this.setState({isCliked:!this.state.isCliked});
    }

    handleDelete = id => {
        const lists = [...this.state.lists];
        const index = lists.findIndex(employee => employee.id === id);
        lists.splice(index, 1);
        this.setState({ lists });

    };

    render(){
        const { isCliked } = this.state;
        return (
            <div>
                {isCliked?(
                    <AddEmployee onRestart={this.handleClick} onAdd={() => this.handleAddEmployee}/>
                ):(
                    <button className="btn btn-primary" onClick={this.handleClick}>Add a Employee</button>
                )}
                <table className="table table-hover mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.lists.map( value => <Employee employee={value} key={value.id} onDelete={this.handleDelete}/> )}
                </tbody>
                </table>
            </div>
        );
    }
}

export default App;