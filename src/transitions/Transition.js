import { TransferWithinAStationSharp } from "@mui/icons-material";
import { animate, motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const Transition = ({ children }) => {
  return (
    <motion.div animationConfiguration={animationConfiguration} transition={{ delay: 0.5 }} initial={{opacity: 0}} animate={{opacity: 1}}>
      {children}
    </motion.div>
  );
};

export default Transition;
