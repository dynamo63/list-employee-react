import React, {Component} from 'react';

class AddEmployee extends Component{

    state = {
        email:'',
        number:'',
    }

    //On cree des referentiels vers nos input name et surname
    inputName = React.createRef();
    inputSurname = React.createRef();


    //Event method for email and number
    handleChangeNumber = (e) =>{
        
        const inputNumber = e.target;
        const number = inputNumber.value; // On recupere la valeur du champ
        const regex = /^(\+241)(\d{2}){4}$/; 

        this.setState({ number });

        if (regex.test(number)){
            inputNumber.classList.add('is-valid');
        }
        
    }

    handleChangeEmail = (e) =>{
        const inputEmail = e.target;
        const regex = /.+@pone\.ga$/;

        this.setState({ email:inputEmail.value });

        if (regex.test(inputEmail.value)){
            inputEmail.classList.add('is-valid');
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault(); //Annulation de l'evenement par defaut
        const { email,number } = this.state;
        const name = this.inputName.current.value;
        const surname = this.inputSurname.current.value;
        const id = Math.floor(Math.random()* 99) + 2;
        const addEmployee = this.props.onAdd();
        addEmployee(id, name, surname, email, number);
        this.props.onRestart();
    }

    

    render(){
        return (
            <div>
                <form className="form-row" onSubmit={this.handleSubmit}>
                    <div className="col">
                        <input type="text" className="form-control" 
                                ref={this.inputName} name="name" placeholder="Name"
                        />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" 
                                ref={this.inputSurname} name="surname" placeholder="Surname"
                        />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control" 
                                value={this.state.email} onChange={this.handleChangeEmail}
                                name="email" placeholder="example@pone.ga" 
                        />
                    </div>
                    <div className="col">
                        <input type="tel" className="form-control" 
                                value={this.state.number} onChange={this.handleChangeNumber}
                                name="number" placeholder="+241 - 6 numbers"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
        );
        }
    }

export default AddEmployee;