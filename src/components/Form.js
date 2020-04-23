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
            comment: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. But they do anyway because they don't care about what you think."
        })
    }

    render() {
        console.log(this.state)
      return (
      <div className="card">
          <form>
              <div class="form-group">
                <label>Name</label>
                <input class="form-control" type='text' name='name' onChange={this.handleChange} value={this.state.name}></input>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input class="form-control" type='email' name='email' onChange={this.handleChange} value={''}></input>
              </div>
              <div class="form-group">
                <label>Comment</label>
                <textarea rows="5" class="form-control" type='text' name='comment' onChange={this.commentHandleChange} value={this.state.comment}></textarea>
            </div>
              <input class="btn btn-primary runAway" type="submit" value="Submit" />
          </form>
      </div>
      )
    }
}

export default Form;