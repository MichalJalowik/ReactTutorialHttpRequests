import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import axios from '../../axios'

class Blog extends Component {

    state = {
        posts: [],
        postSelectePOstId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post, author: 'Max'
                }
            })
            this.setState({ posts: updatedPosts });
            //console.log(response);
        })
            .catch(error => {
                //console.log(error)
                this.setState({ error: true })
            });
    }

    postSelectedHandler(id) {
        this.setState({ postSelectePOstId: id });
    }


    render() {
        let posts = <p style={{ textAlign: "center" }}>Soething went wrong !</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                ></Post>
            }

            );
        }




        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postSelectePOstId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;