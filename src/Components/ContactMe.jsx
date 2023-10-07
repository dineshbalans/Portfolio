import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactLeft from "./ContactLeft";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { inviewHandler } from "../utils/animationHandler";

const ContactMe = () => {
  const contactForm = useRef();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const animation = useAnimation();

  // ========== Email Validation start here ==============
  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      phoneNumber,
      subject,
      message,
    };
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .sendForm(
          "service_hxh9pso",
          "template_zozccyw",
          contactForm.current,
          "6FG2veLvB95zlLUqf"
        )
        .then(
          (result) => {
            console.log("Message Sent");
            console.log(formData);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  }, [successMsg]);

  useEffect(() => {
    if (errMsg !== "") {
      setTimeout(() => {
        setErrMsg("");
      }, 4000);
    }
  }, [errMsg]);

  return (
    <InView onChange={(inView) => inviewHandler(inView, animation)}>
      <section
        id="contact"
        className="w-full container mx-auto pb-20 border-b-[1px] border-b-gray-700"
      >
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={animation}>
          <div className="flex justify-center items-center text-center">
            <h2 className="section-title py-10">Contact Me 📧</h2>
          </div>
          <div className="w-full ">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between ">
              <ContactLeft />
              <div className="w-full lgl:w-[60%] h-full">
                {/*  */}
                <form
                  ref={contactForm}
                  className="w-full flex flex-col gap-4 lgl:gap-6 py-6 lgl:py-0"
                >
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                  <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        name="name"
                        placeholder="Your name"
                        className={`${
                          errMsg === "Username is required!" &&
                          "outline-designColor"
                        } input`}
                        type="text"
                      />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        name="phone"
                        placeholder="Your phone number"
                        className={`${
                          errMsg === "Phone number is required!" &&
                          "outline-designColor"
                        } input`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      placeholder="Your email"
                      className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } input`}
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name="subject"
                      placeholder="Your subject"
                      className={`${
                        errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                      } input`}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                      placeholder="Your Message"
                      className={`${
                        errMsg === "Message is required!" &&
                        "outline-designColor"
                      } textarea`}
                      cols={30}
                      rows={8}
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSend}
                      className="btn btn-lg bg-blue-700 hover:bg-blue-900"
                    >
                      Send Message
                    </button>
                  </div>
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#141518] to-[#141518] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#141518] to-[#141518] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </InView>
  );
};

export default ContactMe;
