import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts'
import './Blog.css';
//import axios from 'axios';
import NewPost from './NewPost/NewPost'


class Blog extends Component {
    state = {
        auth: true
    }


    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
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


                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost}></Route> : null}
                    <Route path="/posts" component={Posts}></Route>
                    <Route render={() => <h1>not found</h1>}></Route>
                   {/* <Redirect from="/" to="/posts" /> */}
                </Switch>


            </div>
        );
    }
}

export default Blog;