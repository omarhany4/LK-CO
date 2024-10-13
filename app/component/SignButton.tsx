"use client";
//style css is the styling for framer components
import "../../style.css";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { auth, storage } from "../../firebaseConfig";
import { motion, Variants } from "framer-motion";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function SignButton() {
  const [imageUrl, setImageUrl] = useState("");
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, "images/book_3145765.png"); // Change this to your image path
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  //function for dropdown button from framer visible only in logged in view
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div>
      {user ? (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className=" text-skin-primary w-44 "
        >
          <motion.button
            className="px-10 py-3"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={imageUrl}
              alt="Selected"
              className="w-20 h-20 object-cover rounded-full"
            />
            <p>omar</p>
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" fill="#ff7517" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            className=" absolute w-44 "
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li
              className="hover:bg-skin-primary"
              variants={itemVariants}
            >
              <button>Profile</button>
            </motion.li>
            <motion.li
              className="hover:bg-skin-primary"
              variants={itemVariants}
            >
              <button>Log out</button>
            </motion.li>
            <motion.li
              className="hover:bg-skin-primary"
              variants={itemVariants}
            >
              <button>Log out</button>
            </motion.li>
            <motion.li
              className="hover:bg-skin-primary"
              variants={itemVariants}
            >
              <button onClick={handleLogout}>Log out</button>
            </motion.li>
          </motion.ul>
        </motion.nav>
      ) : (
        <a className=" px-10 text-skin-secondary  text-xl" href="/Sign">
          Log in
        </a>
      )}
    </div>
  );
}
