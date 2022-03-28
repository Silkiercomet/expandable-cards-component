import { useRef, useEffect, useState } from "react";
import "./styles.css";
let data = [
  "https://source.unsplash.com/random/300×300",
  "https://source.unsplash.com/random/301×301",
  "https://source.unsplash.com/random/302×302",
  "https://source.unsplash.com/random/303×303",
  "https://source.unsplash.com/random/304×304"
];
export default function App() {
  const [activeImg, setActiveImg] = useState(0);
  const activeRef = useRef(null);

  useEffect(() => {
    let img = activeRef.current;
    if (activeRef.current) {
      img.classList.add("active");
    }
    return () => img.classList.remove("active");
  }, [activeImg]);

  return (
    <div className="App">
      <menu className="images__menu">
        {data.map((img, index) => {
          return (
            <li
              className="image"
              key={index}
              ref={index === activeImg ? activeRef : null}
              onClick={() => setActiveImg(index)}
            >
              <img src={img} alt={"image" + index} />
              <h3>#{index + 1}</h3>
            </li>
          );
        })}
      </menu>
    </div>
  );
}
