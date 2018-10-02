import React from 'react'

export default function Form(props) {
  return (
    <div className="card">
      <div className="card-header">Create a Flash Card</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="inputQuestion">Question</label>
            <input type="text" id="questionInput" placeholder="Enter card question here"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputAnswer">Answer</label>
            <input type="text" id="answerInput" placeholder="Enter card answer here"/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  )
}
