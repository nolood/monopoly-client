import { AnimationControls, AnimationDefinition, motion } from 'framer-motion';
import styles from './chip.module.css';
import { forwardRef } from 'react';
import { ChipColors } from '@/entities/chip/model/ChipColors.ts';
const Chip = forwardRef<
  HTMLDivElement,
  {
    anim?: AnimationControls;
    onCompleteAnim?: (definition: AnimationDefinition) => void;
    color: ChipColors;
  }
>(({ anim, onCompleteAnim, color }, ref) => {
  return (
    <motion.div
      animate={anim}
      ref={ref}
      className={`${styles.chip} ${styles[color]}`}
      onAnimationComplete={onCompleteAnim}
    >
      <div></div>
    </motion.div>
  );
});

export default Chip;
