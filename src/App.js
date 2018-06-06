import React, { Component } from 'react';
import './App.css';
import SideBar from "./components/navigation/side_bar";
import TopBar from "./components/navigation/top_bar";
import Home from './components/home/home';
import Details from './components/details/coffee details';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, {history} from './store';

window.store = store;
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router>
                        <div className="App">
                            <div className="todo-wrap">
                                <SideBar/>
                                <div className='content'>
                                    <TopBar/>
                                    <Switch>
                                        <Route exact path='/' component={Home}/>
                                        <Route path='/:id' component={Details}/>
                                    </Switch>
                                </div>
                            </div>

                        </div>
                    </Router>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
