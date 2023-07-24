"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormspark } from "@formspark/use-formspark";
import { ClockLoader } from "react-spinners";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Required" })
    .email({ message: "Please enter a valid email address!" }),
  text: z.string().min(1, { message: "Required" }),
});

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const [hasSent, setHasSent] = useState("");
  const buildMessage = (styles, message) => {
    return <p className={styles}>{message}</p>;
  };
  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      text: data.text,
      _email: {
        subject: "You have a new booking inquiry!",
        from: "djorhanito.com",
      },
    };
    try {
      console.log(payload);
      setIsLoading(true);
      await submit(payload);
      setHasSent({
        style: "text-green-300",
        message: "Message successfully sent!",
      });
    } catch (error) {
      console.error(error);
      setHasSent({
        style: "text-red-300",
        message: "Failed to send message. Please try again!",
      });
    }
    setIsLoading(false);
    setTimeout(() => setHasSent(""), 5000);
  };
  return (
    <div className="bg-black">
      <div id="bookings" className="px-2 py-[80px] container mx-auto bg-black">
        <h2 className="text-red-500 text-center uppercase font-bold text-3xl md:text-5xl">
          Bookings
        </h2>
        <h3 className="text-gray-500 text-center text-lg md:text-2xl">
          Shoot me a message
        </h3>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-5 mx-auto">
            <Image
              alt="dj_orhanito-bookings"
              src="/bookings.webp"
              //  placeholder="blur"
              quality={100}
              width={500}
              height={200}
            />
          </div>
          <div>
            <form
              className="max-w-[500px] flex mx-auto flex-col gap-3 flex-wrap"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="email" className="uppercase font-bold text-white">
                Your Email-Address
              </label>
              <input
                type="string"
                className="bg-gray-100 w-full text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <label
                htmlFor="message"
                className="mt-2 uppercase font-bold text-white"
              >
                Message
              </label>
              <textarea
                maxLength={500}
                rows={4}
                className="bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                {...register("text")}
              />
              {errors.text?.message && (
                <p className="text-red-500">{errors.text.message}</p>
              )}

              <button
                className="bg-red-500 mx-auto justify-content w-full h-14 text-black text-sm font-bold rounded-md px-3 py-1 mt-1"
                type="submit"
                disabled={submitting}
              >
                Send
              </button>
              {isLoading && (
                <div className="w-full mt-1 flex flex-col items-center">
                  <ClockLoader color="#ffffff" size={50} />
                </div>
              )}
              {hasSent !== ""
                ? buildMessage(hasSent.style, hasSent.message)
                : ""}
              <p className="text-white">
                By sending a message through this form you agree to the{" "}
                <Link className="text-red-500" href="/dataprivacy#dataprivacy">
                  data privacy statement
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
