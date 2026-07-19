import { useForm, ValidationError } from "@formspree/react";
import { faAt, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzdnrrey");
  if (state.succeeded) {
    return (
      <div className="max-w-3xl rounded-2xl border border-green-300 bg-green-50 p-8 text-center font-[Montserrat]">
        <h2 className="text-2xl font-bold">Obrigado pelo contato!</h2>

        <p className="mt-2 text-black/70">
          Recebi sua mensagem e responderei o mais breve possível.
        </p>
      </div>
    );
  }
  return (
    <form
      className="flex flex-1 max-w-3xl flex-col gap-5 font-[Montserrat]"
      onSubmit={handleSubmit}
    >
      <label
        className="flex items-center gap-2 text-xl font-medium"
        htmlFor="name"
      >
        <FontAwesomeIcon icon={faUser}/>
        Nome
      </label>

      <input
        autoComplete="name"
        id="name"
        name="name"
        type="text"
        placeholder="Como você se chama?"
        className="px-5 py-4 rounded-full border border-black/30 outline-none transition-all duration-200 focus:border-sky-950 focus:ring-2 ring-sky-950/30"
        required
      />

      <label
        className="flex items-center gap-2 text-xl font-medium"
        htmlFor="email"
      >
        <FontAwesomeIcon icon={faAt} />
        Email
      </label>

      <input
        className="px-5 py-4 outline-0 border border-black/30 focus:border-sky-950 focus:ring-2 ring-sky-950/30 rounded-full"
        autoComplete="email"
        id="email"
        type="email"
        name="email"
        placeholder="seunome@email.com"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label
        className="flex items-center gap-2 text-xl font-medium font-[Montserrat]"
        htmlFor="message"
      >
        <FontAwesomeIcon icon={faMessage}/>
        Mensagem
      </label>
      <textarea
        rows={6}
        className="transition-all   resize-none p-5 outline-0 border border-black/30 focus:border-sky-950 focus:ring-2 ring-sky-950/30 rounded-2xl"
        placeholder="Conte um pouco sobre seu projeto ou oportunidade..."
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="font-[Montserrat] font-semibold transition-all p-4 flex justify-center items-center gap-2 rounded-4xl bg-[#212830] border border-black/40 text-white hover:opacity-85 active:scale-[0.98]"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default ContactForm;
