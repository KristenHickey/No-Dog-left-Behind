import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../Animations/lf30_editor_gkntsx9y.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const LottieDog: React.FC = () => {
  return (
    <div className='animation'>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
      />
    </div>
  )
}

export default LottieDog