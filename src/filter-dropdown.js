import React from 'react'

export default function FilterDrop(props) {
  return (
    <div>
      <select defaultValue="none" className="m-3" id="topicSelect" onChange={props.sort}>
        {props.topics
          .map((topic) => {
            return <option key={topic} value={topic}>{topic}</option>
          })}
        <option value="none">none</option>
      </select>
    </div>
  )
}
