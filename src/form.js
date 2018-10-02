import React from 'react'

export default function Form(props) {
  return (
    <div className="card mx-auto mt-5 text-center" style={{width: "32rem"}}>
      <div className="card-header text-left">Create a Flash Card</div>
      <div className="card-body">
        <form onSubmit={props.submit}>
          <div className="form-group text-left">
            <label htmlFor="inputQuestion" className="mr-2">Question:</label>
            <input name="question" type="text" id="questionInput" size="48" placeholder="Enter card question here"/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputAnswer" className="mr-3">Answer:</label>
            <input type="text" id="answerInput" name="answer" size="48" placeholder="Enter card answer here"/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  )
}
