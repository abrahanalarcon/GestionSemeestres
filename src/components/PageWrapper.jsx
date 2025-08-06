
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Empieza invisible y desplazado
      animate={{ opacity: 1, y: 0 }}  // Termina visible y en posición
      exit={{ opacity: 0, y: -20 }}   // Al salir, se desvanece y sube
      transition={{ duration: 0.3 }}  // Velocidad de animación
      className="p-6"
    >
      {children}
    </motion.div>
  );
}
