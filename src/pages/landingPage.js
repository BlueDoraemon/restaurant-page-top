import { div,img,dropItIn } from "..";

export function landingPage(){
    const heading = document.createElement('h1');
    heading.textContent = 'The Lanternpost Café';

    //Photo by <a href="https://unsplash.com/@rmdhnrexha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rezha Ramadhan</a> on <a href="https://unsplash.com/photos/sV8M_Lkg60Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    // Photo by <a href="https://unsplash.com/@tomasjasovsky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tomas Jasovsky</a> on <a href="https://unsplash.com/s/photos/lanternpost-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      
    const text = document.createElement('p');
    text.textContent = 'The Lanternpost Cafe is a whimsical and cozy establishment inspired by the magical world of Narnia. Step into a charming atmosphere that transports you to a realm of enchantment and adventure. The cafe combines the warmth of a traditional coffeehouse with the ethereal ambiance of Narnia, creating a unique and memorable experience for visitors of all ages.';

    const btn = document.createElement('button');
    btn.textContent = 'gibberish';

    return [heading, text, btn];  
}
