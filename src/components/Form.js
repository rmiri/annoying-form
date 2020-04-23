import React from 'react'

class Form extends React.Component {

    state = {
        name: 'Your Name',
        email: '',
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    commentHandleChange = (e) => {
        this.setState({
            comment: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. But they do anyway, because they don't care about what you think."
        })
    }

    render() {
        console.log(this.state)
      return <div>
          <form>
              <label>Name</label>
              <input type='text' name='name' onChange={this.handleChange} value={this.state.name}></input>
              <label>Email</label>
              <input type='email' name='email' onChange={this.handleChange} value={''}></input>
              <label>Comment</label>
              <input type='text' name='comment' onChange={this.commentHandleChange} value={this.state.comment}></input>

              <input type="submit" value="Submit" />
          </form>
      </div>
    }
}

export default Form;