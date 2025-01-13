'use client';

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  subjetc: string;
  email: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => (window.location.href =
    `mailto:airamvegasuarez37@gmail.com?subject=${formData.subjetc}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row px-6 sm:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16  sm:top-4 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 sm:space-y-10 mt-20 sm:mt-0">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          I have what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's talk</span>
        </h4>
        <div className="space-y-6 sm:space-y-10">
          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <PhoneIcon className="h-5 w-5 sm:h-7 sm:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg sm:text-2xl">+41 77 202 91 58</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <MapPinIcon className="h-5 w-5 sm:h-7 sm:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg sm:text-2xl">Bern, Switzerland</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <EnvelopeIcon className="h-5 w-5 sm:h-7 sm:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg sm:text-2xl">airamvegasuarez37@gmail.com</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full sm:w-fit mx-auto">
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                {...register('name')}
                placeholder="Name"
                className="contactInput w-full"
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="contactInput w-full"
                type="email"
              />
            </div>

            <input
              {...register('subjetc')}
              placeholder="Subject"
              className="contactInput w-full"
              type="text"
            />

            <textarea {...register('message')} placeholder="Message" className="contactInput w-full"></textarea>
            <button type="submit" className="bg-[#F7AB0A] py-3 sm:py-5 px-8 sm:px-10 rounded-md text-black font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
