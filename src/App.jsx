import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Product from "./components/Product";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-base leading-base text-grey-500 flex flex-col items-center tablet:px-20 tablet:gap-12 desktop:px-41.25 desktop:gap-24">
      <Header openMenu={() => setIsMenuOpen(true)} />

      <main className="tablet:max-w-200 tablet:w-full desktop:max-w-350 desktop:px-11.25">
        <Product />
      </main>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <Menu closeMenu={() => setIsMenuOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;