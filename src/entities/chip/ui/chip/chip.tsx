import { AnimationControls, AnimationDefinition, motion } from 'framer-motion';
import styles from './chip.module.css';
import { forwardRef } from 'react';
const Chip = forwardRef<
  HTMLDivElement,
  { anim: AnimationControls; onCompleteAnim: (definition: AnimationDefinition) => void }
>(({ anim, onCompleteAnim }, ref) => {
  return (
    <motion.div
      animate={anim}
      ref={ref}
      className={styles.chip}
      onAnimationComplete={onCompleteAnim}
    >
      <div></div>
    </motion.div>
  );
});

export default Chip;
