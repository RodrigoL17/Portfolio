"use client"

import { useState } from "react";
import MessageSubmitBtn from "./messageSubmitBtn";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


export default function ContactForm({title,paragraph,name,email,tel,subject,subjectPlaceHolder,message,messagePlaceHolder,sendMessage}) {

  const INITIAL_STATE = {
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  };

  const [userForm, setUserForm] = useState(INITIAL_STATE);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        userForm,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(function (response) {
        response.status === 200 &&
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            iconColor: "#6cc43a",
            text: "Message send successfully!",
            toast: true,
            background: "#e6f5dd",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: "#6cc43a",
            padding: "0.5rem",
          }).then(setUserForm(INITIAL_STATE));
        response.status === 400 &&
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            iconColor: "#FF0000",
            text: "Product deleted succesfully!",
            toast: true,
            background: "#FEEBEB",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: "#FF0000",
            padding: "0.5rem",
          });
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-lg shadow-[1px_1px_32px_16px_rgba(0,0,0,0.2)]">
      <div className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-8 lg:mb-16  text-center font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
         {paragraph}
        </p>
        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              {name}
            </label>
            <input
              onChange={onChangeInput}
              type="text"
              id="name"
              name="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leonardo da Vinci"
              value={userForm.name}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              {email}
            </label>
            <input
              onChange={onChangeInput}
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="leonardodaVinci@mail.com"
              value={userForm.email}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              {tel}
            </label>
            <input
              onChange={onChangeInput}
              type="tel"
              id="phone-number"
              name="tel"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="+54 9 11 2222 3333"
              value={userForm.tel}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              {subject}
            </label>
            <input
              onChange={onChangeInput}
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder={subjectPlaceHolder}
              value={userForm.subject}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-400"
            >
              {message}
            </label>
            <textarea
              onChange={onChangeInput}
              id="message"
              rows="6"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={messagePlaceHolder}
              value={userForm.message}
            ></textarea>
          </div>
          <MessageSubmitBtn sendMessage={sendMessage}/>
        </form>
      </div>
    </section>
  );
}
