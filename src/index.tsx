import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./rerender";
import {state} from "./Redux/State";


rerenderEntireTree(state)
