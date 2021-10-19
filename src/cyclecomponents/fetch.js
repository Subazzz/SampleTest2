import React, { Component } from 'react';
import axios from 'axios'
class Fetch extends Component {
    constructor(props) {
       super (props)
       this.state ={ posts :[]}      
    }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          console.log(response) ; this.setState({posts: response.data})
      }).catch(error => {
          console.log(error)
          this.setState({errormsg : 'invalid url'})
      })
  }  

    render() {
        const {posts, errormsg} = this.state
        return (
            <div>
              <h1> List of posts </h1> 
              { posts.length?
                  posts.map(post => <div key={post.id}> key : {post.id} {post.title}  </div>) : null
              }
              {
                  errormsg ? <div> {errormsg} </div> : null
              }
            </div>
        )
    }
}

export default Fetch;