import React, { Component } from 'react';
// import "./Comments.css";


class Comments extends Component {
    constructor (props) {
        super(props)
        this.state = {
          newComment: ''
        }
    }

    handleCreateComments =(e)=> {
        e.preventDefault();
        console.log('New comment:', e.target.value);
        this.setState({
        newComment: e.target.value
        });
        
        // this.handleSubmit();
    }
    
    handleSubmit=(e)=> {
        // e.preventDefault();
        console.log('New comment2:', this.state.newComment);
        this.props.createComments(this.state.newComment, 
                                  this.props.match.params.id
        );
        this.setState({
            newComment: ''
            });
    }

    render(){

        let comments = this.props.comments;
      
        let listOfComment = comments.filter(item =>  
            item.themeId === parseInt(this.props.match.params.id));
        let commentList = listOfComment.map(item => {    
            return (
            <div className="AllComments" key={item.id}>
                <li>
                {item.feedback} 
                </li> <br></br>
            </div>
            );
        });
        // console.log(listOfComment);
        return(
            <div className="CommentsDetail"> 
                  
                <div className="CommentList"> 
               
                    <h3 className="enterWord">Enter comment: </h3> 
                    <textarea onChange={(e) => this.handleCreateComments(e)} 
                    className="enterFeedback" type="text" name='newComment'
                    value={this.state.newComment} />
                    <input type="submit" value="Send" onClick={(e) => this.handleSubmit(e)}/>
                
                    {commentList}
                </div>
            </div>
            
        )
    }
}

export default Comments;