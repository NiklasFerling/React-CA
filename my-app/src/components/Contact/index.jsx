import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Contact() {
  const schema = yup.object().shape({
    fullName: yup.string().min(3, "Min three characters required").required(),
    email: yup
      .string()
      .email("Please provide a valid email address")
      .required(),
    subject: yup.string().min(3, "Min three characters required").required(),
    message: yup.string().min(3, "Min three characters required").required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (body) => {
    console.log(body);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-10">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-1/2 md:w-1/4 m-auto"
      >
        <label htmlFor="fullName" className="ml-2">
          Full Name
        </label>
        <input
          {...register("fullName")}
          className="border border-black rounded-lg py-1 px-2"
        />
        <p className="text-red-700 ml-2 mb-4">{errors.fullName?.message}</p>
        <label htmlFor="email" className="ml-2">
          Email
        </label>
        <input
          {...register("email")}
          className="border border-black rounded-lg py-1 px-2"
        />
        <p className="text-red-700 ml-2 mb-4">{errors.email?.message}</p>
        <label htmlFor="subject" className="ml-2">
          Subject
        </label>
        <input
          {...register("subject")}
          className="border border-black rounded-lg py-1 px-2"
        />
        <p className="text-red-700 ml-2 mb-4">{errors.subject?.message}</p>
        <label htmlFor="message" className="ml-2">
          Message
        </label>
        <textarea
          {...register("message")}
          className="border border-black rounded-lg py-1 px-2"
          rows={5}
        />
        <p className="text-red-700 ml-2 mb-4">{errors.message?.message}</p>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
