import { useState } from "react";
import { setLetter } from "../store";

export default function GalleryItem({ letter: any } ) {
  const [userLetter, setUserLetter] = useState('');
  // useEffect(() => {
    
  // })
  debugger;
  console.log(letter);
    function handleClick() {
        alert('You clicked me!');
    }

  return letter && (
    <div className="sample" onClick={handleClick}>
        <div className="gallery-item">
            <img src={letter.data.dropcap.src} alt=""/>
        </div>
    </div>
  );
}