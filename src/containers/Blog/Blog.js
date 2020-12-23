import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts'
import './Blog.css';
//import axios from 'axios';
import NewPost from './NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'

class Blog extends Component {








    render() {





        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/" 
                            exact
                            activeClassName="my-active" 
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                { /*<Route path="/" exact render={() => <h1>Home</h1>}></Route>
                <Route path="/" render={() => <h1>Home 2</h1>}></Route>*/}
                <Route path="/" exact component={Posts}></Route>
                <Route path="/:id" exact component={FullPost}></Route>
                <Route path="/new-post" component={NewPost}></Route>

            </div>
        );
    }
}

export default Blog;