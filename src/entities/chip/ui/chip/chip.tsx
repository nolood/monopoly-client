import { AnimationControls, motion } from 'framer-motion';
import styles from './chip.module.css';
import { forwardRef } from 'react';
const Chip = forwardRef<HTMLDivElement, { anim: AnimationControls }>(({ anim }, ref) => {
  return (
    <motion.div animate={anim} ref={ref} className={styles.chip}>
      <div></div>
    </motion.div>
  );
});

export default Chip;
