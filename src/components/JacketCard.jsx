import { motion } from 'framer-motion';

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});


export const JacketCard = ({ imgURL, changeJacketImage, jacketImg, price, info }) => {
  const handleClick = () => {
    if (jacketImg !== imgURL.jacket) {
      changeJacketImage(imgURL.jacket);
    }
  };

  return (
    <div
      className={`jacket-card-container ${jacketImg === imgURL.jacket ? 'border-primary' : 'border-transparent'}`}
      onClick={handleClick}
    >
      <motion.div
        className="jacket-card"
        variants={fadeIn('up', 'tween', 0.4, 1)}
      >
        <img src={imgURL.thumbnail} alt="Jacket Thumbnail" />
        <div className="info-overlay">
          <div className="info-content">
            <p className="info">{info}</p>
            <p className="price">R{price}</p> 
          </div>
        </div>
      </motion.div>
    </div>
  );
};

