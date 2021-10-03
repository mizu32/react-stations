// DO NOT DELETE

import React, { useState } from 'react';

//import * as React from 'react'
//import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/dachshund/dachshund_4.jpg");

  return (
    <div>
      <header><h1>Dogアプリ</h1></header>
      犬のサイトです．
      <img src={dogUrl}></img>
    </div>
    )
}
