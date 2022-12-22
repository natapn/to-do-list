import { Component } from "react";
import image from './allpic.jpg';
import ensign from './ensign.jpg';
import check from './check.png';

export class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            toDoList: []
        }
    }

    onChangeEvent(e) {
        this.setState({ userInput: e });
    }

    addItem(input) {
        if (input === '') return;
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({ toDoList: listArray, userInput: '' });
    }

    deleteAll() {
        let listArray = this.state.toDoList;
        listArray.length = 0;
        this.setState({ toDoList: listArray });
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="box-left">
                        <h1>TO-DO LIST</h1>
                        <img src={ensign} alt="ensign" width="200px" className="img-header" />
                        <input type="text" placeholder="What do you want to do?" onChange={(e) => { this.onChangeEvent(e.target.value) }} value={this.state.userInput} />
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
                        <button onClick={() => this.deleteAll()} className="delete">Delete all</button>
                        <img src={image} alt="todoimage" width="200px"/>
                        <p>Designed by <a href="https://www.freepik.com/">Freepik</a></p>
                    </div>
                    <div className="box-right">
                        <ul>
                            {this.state.toDoList.map((item, index) => (
                                <li onClick={this.crossedWord} key={index}>
                                    <img src={check} width="20px" alt="check" className="check" />{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}