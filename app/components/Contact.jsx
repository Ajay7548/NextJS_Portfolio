import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const Contact = ({ isDarkMode, setIsDarkMode }) => {
  //Web3 From using api to get msg on mail
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Check if any field is empty
    if (!name || !email || !message) {
      setResult("All fields are required!");
      return;
    }

    formData.append("access_key", "f56b0968-52d5-4bcc-bb0d-aa749db7656a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(
        data.success
          ? " 🎉 Thank you for reaching out! Your message has been submitted successfully. I’ll get back to you as soon as possible."
          : data.message
      );
      // if(data.success)  alert('Message Send ......')
      if (data.success) event.target.reset();
    } catch (error) {
      setResult("Submission Failed");
      console.error("Error:", error);
    }
  };

  // const onSubmit = async (event) => {
  //     event.preventDefault();
  //     setResult("Sending....");
  //     const formData = new FormData(event.target);

  //     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setResult("Form Submitted Successfully");
  //       event.target.reset();
  //     } else {
  //       console.log("Error", data);
  //       setResult(data.message);
  //     }
  //   };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="Contact"
      className="
      dark:bg-none
      w-full px-6 lg:px-10 py-2 lg:py-10  scroll-mt-20   bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-md lg:text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl lg:text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center  max-w-2xl mx-auto mt-5 mb-6 lg:mb-12 font-Ovo"
      >
        📩 Feel free to reach out via the form below or email me at
        mouryaajay7548@gmail.com. I’ll get back to you as soon as possible!
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="mx-auto max-w-2xl"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            name="name"
            required
            className="
            dark:bg-darkHover/30 dark:border-white/90
            flex-1 p-2 lg:p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter Your Name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            name="email"
            required
            className="
            dark:bg-darkHover/30 dark:border-white/90
            flex-1 p-2 lg:p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          name="message"
          required
          className="
        dark:bg-darkHover/30 dark:border-white/90
        w-full p-3 lg:p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 "
          rows="5"
          placeholder="Enter your message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="
        dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover 
         py-2 lg:px-8 px-6 w-max flex   items-center justify-between  gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit now{" "}
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white}
            alt=""
            className="w-4"
          />{" "}
        </motion.button>

        {/* use of web3 form */}
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
