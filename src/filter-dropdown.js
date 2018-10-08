import React from 'react'

export default function FilterDrop(props) {
  return (
    <div>
      <select defaultValue="none" className="m-3" id="topicSelect" onChange={props.sort}>
        {props.topics
          .map((card) => {
            return <option key={card.cardId} value={card.topic}>{card.topic}</option>
          })}
        <option value="none">none</option>
      </select>
    </div>
  )
}
