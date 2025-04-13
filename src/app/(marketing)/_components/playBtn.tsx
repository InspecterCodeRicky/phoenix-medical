import { motion } from "framer-motion";
import { Play } from "lucide-react";

function PlayBtn() {
  return (
      <div className="relative w-fit h-fit">
        {/* AURA FLUIDE */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-500 opacity-50"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
            repeatDelay: 0.5,
          }}
        />

        {/* BOUTON */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center justify-center"
          >
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </motion.button>
      </div>
  );
}

export default PlayBtn;
