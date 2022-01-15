import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import APIservice from '../APIservice';
import { Dog } from '../interfaces';

// type DogProfile = {}

const DogProfile: React.FC = () => {
  const { id } = useParams();
  const [dog, setDog] = useState<Dog | null>(null);

  useEffect(() => {
    if (id) {
      APIservice.getOneDog(id)
        .then(data => setDog(data))
    }
  }, [])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}


export default DogProfile