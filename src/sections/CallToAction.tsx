import { motion } from "framer-motion";

const CallToAction = () => (
  <section className="py-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="container mx-auto text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900">
        Join Marketron today
      </h2>
      <p className="max-w-xl mx-auto mt-4 text-lg text-gray-800">
        Leverage AI to stay ahead of market trends and make smarter decisions.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-8 py-4 mt-8 text-lg font-semibold text-white bg-black rounded-full shadow-lg"
      >
        Start Your Free Trial
      </motion.button>
    </motion.div>
  </section>
);

export default CallToAction;