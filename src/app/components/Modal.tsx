"use client";
import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
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
            required
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
          />
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
