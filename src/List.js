import React from 'react';

function List(props) {
  return props.itemList.map(function(item, i) {
    let key = 'listItem' + i;
    return (
      <li key={key} onClick={() => props.handleClick(item)}>
        {item.value}
      </li>
    );
  });
}

export default List;
