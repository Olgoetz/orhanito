"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const validationSchema = z.object({
  email: z.string().min(1, { message: "Required" }),
  text: z
    .string()
    .min(1, { message: "Required" })
    .email({ message: "Bitte eine gültige Email Adresse eingeben" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const Bookings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <div className="bg-black">
      <div id="bookings" className="px-2 py-[80px] container mx-auto bg-black">
        <h2 className="text-red-400 text-center uppercase font-bold text-3xl md:text-5xl">
          Bookings
        </h2>
        <h3 className="text-gray-500 text-center text-lg md:text-2xl">
          Anfragen über das Formular
        </h3>

        <form
          className="max-w-[500px] mt-5 flex mx-auto flex-col gap-3 flex-wrap"
          onSubmit={handleSubmit((d) => console.log(d))}
        >
          <label htmlFor="email" className="uppercase font-bold text-white">
            Deine Email-Adresse
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
            Nachricht
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
            className="bg-red-300 mx-auto justify-content w-full h-14 text-black text-sm font-bold rounded-md px-3 py-1 mt-1"
            type="submit"
          >
            Abschicken
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bookings;
