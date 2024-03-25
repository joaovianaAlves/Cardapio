"use client";

import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");
  // function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (email === "" || name === "" || message === "")
  //     return alert("Preencha todos os campos");
  //   const templateParams = {
  //     from_name: name,
  //     email: email,
  //     message: message,
  //   };
  //   emailjs
  //     .send(
  //       "service_te8ju1q",
  //       "template_m4kx5qk",
  //       templateParams,
  //       "Lw9vvpGaMlbYE2at2"
  //     )
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //       }
  //     );
  //

  return (
    <div>
      <form className="space-y-4 p-4">
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg ">
            Email
            <button
              onClick={onClose}
              type="button"
              className="ml-40 bg-red-500 text-white px-2 rounded-md hover:bg-red-700"
            >
              x
            </button>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
          />

          <label className="font-bold text-lg">Mensagem</label>
          <textarea
            className="p-2 border border-gray-300 rounded"
            // onChange={(e) => setMessage(e.target.value)}
            // value={message}
          ></textarea>
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-bold text-lg">Tipo</label>
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-lg"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
