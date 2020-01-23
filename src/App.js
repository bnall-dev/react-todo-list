import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import Toggle from './Toggle';
import './App.css';

function App() {
  let [itemList, setItemList] = useState([]);

  const handleClick = item => {
    if (!item.done) {
      item.value = <s>{item.valueSafe}</s>;
      item.done = true;
      let toggleBox = document.querySelector('#toggleBox');

      let list = document.querySelectorAll('li');
      if (toggleBox.checked) {
        list[itemList.indexOf(item)].setAttribute('hidden', true);
      }
    } else if (item.done) {
      item.value = item.valueSafe;
      item.done = false;
    }
    setItemList([...itemList]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements[0].value !== '') {
      let item = {
        value: e.target.elements[0].value,
        valueSafe: e.target.elements[0].value,
      };
      let newList = [...itemList, item];
      setItemList(newList);
      e.target.elements[0].value = '';
    }
  };
  let [hideButton, setHideButton] = useState('Hide Bodies');

  const handleToggle = e => {
    let divlist = document.querySelectorAll('li');
    let list = [...itemList];
    if (e.target.checked) {
      list.map(function(item, i) {
        if (item.done) {
          divlist[i].setAttribute('hidden', true);
        } else {
          divlist[i].hidden = false;
        }
        setHideButton('Unhide');
        return 0;
      });
    } else {
      list.map(function(item, i) {
        divlist[i].hidden = false;
        setHideButton('Hide Bodies');
        return 0;
      });
    }

    setItemList([...itemList]);
  };

  return (
    <div id="app">
      <div id="paper">
        <header>People to Kill</header>

        <ul id="list">
          <List itemList={itemList} handleClick={handleClick} />
        </ul>
        <Form
          handleSubmit={handleSubmit}
          itemList={itemList}
          setItemList={setItemList}
        />
        <Toggle handleToggle={handleToggle} hideButton={hideButton} />
      </div>
    </div>
  );
}

export default App;
