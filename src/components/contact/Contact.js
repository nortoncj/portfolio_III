import React, { useState, useRef } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [reply_to, setreply_to] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(reply_to)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dtvncdq", "template_nm6gkqs", form.current, {
        publicKey: "user_w6rlx1Bt4stlf7oqlcKGQ",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrMsg("Username is required!");
    } else if (phone === "") {
      setErrMsg("Phone number is required!");
    } else if (reply_to === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(reply_to)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .sendForm(
          "service_dtvncdq",
          "template_nm6gkqs",
          form.current,
          "user_w6rlx1Bt4stlf7oqlcKGQ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setSuccessMsg(
        `Thank you ${name}, Your message has been sent Successfully!`
      );
      setErrMsg("");
      setname("");
      setPhone("");
      setreply_to("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Let's Connect" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[bodyColor] to-[#ffff0] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={form}
              id="contact-form"
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={sendEmail}
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
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-stone-800 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    className={` outline ${
                      errMsg === "Name is required!" && "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-stone-800 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className={` outline ${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-stone-800 uppercase tracking-wide">
                  Email
                </p>
                <input
                  name="reply_to"
                  onChange={(e) => setreply_to(e.target.value)}
                  value={reply_to}
                  className={` outline ${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput `}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-stone-800 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={` outline ${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-stone-800 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`outline ${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  value="Send"
                  onClick={handleSend}
                  className="w-full outline h-12 bg-[#ffff0]  text-base text-stone-800 tracking-wider uppercase hover:shadow-shadowOne duration-300 hover:border-[1px] hover:border-black border-transparent"
                >
                  Send Message
                </button>
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
