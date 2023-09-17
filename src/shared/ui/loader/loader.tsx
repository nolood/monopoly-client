import { motion } from 'framer-motion';
import styles from './loader.module.css';

type LoaderSize = 'sm' | 'md' | 'lg';

const Loader = ({ size }: { size?: LoaderSize }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`${styles.root} ${styles[size || 'md']}`}
    ></motion.div>
  );
};

export default Loader;
