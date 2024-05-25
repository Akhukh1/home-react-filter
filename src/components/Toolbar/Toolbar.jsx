import React from 'react'

export default function Toolbar(props) {

  const { filters, selected, onSelectFilter } = props;

  return (
    <div className = "tookbar">
      {filters.map(filter => {
        return (
          <>
            <button className = {filter === selected ? "selected" : "filter"} onClick = {onSelectFilter}>{filter}</button>
          </>
        )
      })}
    </div>
  );

}
