import React, { useState } from 'react'

type DogImageProps = {
  img: string;
  name: string;
  age: number;
}

const DogImage: React.FC<DogImageProps> = ({ img, name, age }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <figure className="img_container">
      <img alt={`A dog named${name}`} src={img} onLoad={() => setLoaded(true)} />
      {loaded
        ? < figcaption className="cardfigcaption">
          <span>{name}</span>
          <span>{age} {age === 1 ? "year" : "years"} old</span>
        </figcaption>
        : null}
    </figure>
  )
}

export default DogImage;
