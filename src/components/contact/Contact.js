import React, { useRef, useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { send } from '@emailjs/browser';
import { toast } from 'react-toastify';
// import { send } from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessages] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    send("service_2ojd62a", "template_rib1y7t", {
      user_name: name,
      user_email: email,
      user_mobile: mobile,
      user_subject: subject,
      message: message,
    }, "Iq9MlTxUMq1ENLQFy")
      .then((result) => {
        toast.success("Email sent successfully!");
        console.log(result.text);
        // Clear the form
        setName("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessages("");
      })
      .catch((error) => {
        toast.error("Failed to send email.");
        console.log(error.text);
      });
  };



  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              action="#"
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
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
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    placeholder="Your Name"
                    required
                    className={`${errMsg === "Username is required!" &&
                      "outline-designColor"
                      } contactInput`}

                  />
                </div>

              </div>


              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  placeholder="Your Email"
                  required
                  className={`${errMsg === "Please give your Email!" &&
                    "outline-designColor"
                    } contactInput`}
                />
              </div>


              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Whatsapp Number                </p>
                <input
                  id="mobile"
                  type="mobile"
                  name="user_mobile"
                  onChange={(event) => setMobile(event.target.value)}
                  value={mobile}
                  placeholder="Your Whatsapp Number"
                  required
                  className={`${errMsg === "Please give your Whatsapp Number!" &&
                    "outline-designColor"
                    } contactInput`}
                />
              </div>


              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  id="subject"
                  type="text"
                  name="user_subject"
                  onChange={(event) => setSubject(event.target.value)}
                  value={subject}
                  placeholder="Subject"
                  required
                  className={`${errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                    } contactInput`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(event) => setMessages(event.target.value)}
                  value={message}
                  id="message"
                  name="user_message"

                  placeholder="Your Message"
                  required
                  className={`${errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <input type="submit" value="Send"
                    // className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  />

                </div>




              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact