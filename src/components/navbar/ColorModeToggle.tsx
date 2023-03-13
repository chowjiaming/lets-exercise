import {
  type ColorProps,
  type FlexProps,
  Icon,
  Tooltip,
  chakra,
} from '@chakra-ui/react';
import {Flex, useColorMode} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';
import {AnimatePresence, motion, type Variants} from 'framer-motion';
import {enterExitSpin} from '@/utils/motion';
import {type IconType} from 'react-icons';

const MotionButton = chakra(motion.button);

type AnimatedIconProps = {
  icon: IconType;
  label: string;
  colour: ColorProps['color'];
  variants: Variants;
  onClick: () => void;
};
const AnimatedIconButton: React.FC<AnimatedIconProps> = ({
  icon,
  label,
  colour,
  variants,
  onClick,
}) => {
  return (
    <Tooltip label={label}>
      <MotionButton
        key={icon.name}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        display="flex"
        alignItems="center"
      >
        <Icon
          as={icon}
          aria-label={label}
          boxSize="8"
          color={colour}
          onClick={onClick}
        />
      </MotionButton>
    </Tooltip>
  );
};

export const ColorModeToggle: React.FC<FlexProps> = (props) => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Flex align="center" {...props}>
      <AnimatePresence>
        {isDarkMode ? (
          <AnimatedIconButton
            icon={FaSun}
            label="Light mode"
            colour="yellow.400"
            variants={enterExitSpin}
            onClick={toggleColorMode}
          />
        ) : (
          <AnimatedIconButton
            icon={FaMoon}
            label="Dark mode"
            colour="blue.400"
            variants={enterExitSpin}
            onClick={toggleColorMode}
          />
        )}
      </AnimatePresence>
    </Flex>
  );
};

ColorModeToggle.displayName = 'ColorModeToggle';
