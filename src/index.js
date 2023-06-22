 
import newImage from './images/rezha-ramadhan-sV8M_Lkg60Y-unsplash.jpg';
import { landingPage } from './pages/landingPage';
import { renderMenuItems } from './pages/menu';
import { renderContact } from './pages/contact';

import gitHub from './images/github-mark-white.svg';

'use strict';


export function div(_name){
    const div = document.createElement('div');
    div.classList.add(`${_name}`);
    return div;
}

export function img(src, _class){
    const _img = document.createElement('img');
    _img.src = src;
    _img.classList.add(_class);
    return _img;
}

export function dropItIn(arr, containerDiv){
    for (let index = 0; index < arr.length; index++) {
        containerDiv.appendChild(arr[index]);
    };
}

// home menu contact us
// Header 1
// text
// button -> background image
// footer


function _headerBar(){
    const headerList = document.createElement('ul');

    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    [home,menu,contact].forEach((i)=>
    {i.classList.add('button')});
    home.textContent = 'home';
    menu.textContent = 'menu';
    contact.textContent = 'contact';

    home.addEventListener('click',()=>{
        content.textContent = '';
        dropItIn(landingPage(), content);
    });
    menu.addEventListener('click', ()=>{
        content.textContent = '';
        dropItIn(renderMenuItems(), content);
    });
    contact.addEventListener('click', ()=>{
        content.textContent = '';
        dropItIn(renderContact(), content);
    });
    dropItIn([home,menu,contact],headerList);
    return headerList;
}

function _footer(){
    const text = div('footer');
    text.textContent = 'Created by Lx. Li 2023';

    const link  = document.createElement('a');
    link.href = 'https://github.com/BlueDoraemon/restaurant-page-top';
    link.appendChild(img(gitHub,'gitHub'));

    text.appendChild(link);
    //Created by Lx. Li  <a href = 'https://github.com/BlueDoraemon/tic-tac-toe'><img src="images/github-mark.svg"></a> 
    return [text];
}

const content = document.querySelector('#content');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const title = document.querySelector('title');

body.insertBefore(_headerBar(), content);
dropItIn(landingPage(), content);
dropItIn(_footer(),body);

