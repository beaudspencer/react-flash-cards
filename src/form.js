import React from 'react'

export default function Form(props) {
  return (
    <div className="card mx-auto mt-5 text-center" style={{width: "18rem"}}>
      <div className="card-header text-left">Create a Flash Card</div>
      <div className="card-body">
        <form>
          <div className="form-group text-left">
            <label htmlFor="inputQuestion" className="mr-2">Question:</label>
            <input type="text" id="questionInput" size="28" placeholder="Enter card question here"/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputAnswer" className="mr-2">Answer:</label>
            <input type="text" id="answerInput" size="28" placeholder="Enter card answer here"/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  )
}
