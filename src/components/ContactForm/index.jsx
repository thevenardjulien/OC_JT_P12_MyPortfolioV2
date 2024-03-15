import { useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import "./style.scss";
import Card from "../Card";

const ContactForm = () => {
  const form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email, message } = e.currentTarget;
    if (
      userName.value.trim() !== "" &&
      userName.reportValidity() &&
      email.value.trim() !== "" &&
      email.reportValidity() &&
      message.value.trim() !== "" &&
      message.reportValidity()
    ) {
      emailjs
        .sendForm("service_1sptgu6", "template_g9actwj", form.current, {
          publicKey: "sArzFEUNT8gIWgywT",
        })
        .then(
          () => {
            toast.success("Message correctement envoyé!");
          },
          (error) => {
            toast.error(
              "Impossible d'envoyer le message. Rééssayez plus tard...",
              error.text
            );
          }
        );
      form.current?.reset();
    } else {
      toast.error(
        `Problème rencontré lors de la soumission du formulaire.
         Vérifiez les champs avant d'éssayer à nouveau...`
      );
    }
  };
  return (
    <>
      <h2>Contact</h2>
      <div className="formWrapper">
        <form
          ref={form}
          className="ContactForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="ContactForm__UserWrapper">
            <input
              className="ContactForm__input"
              type="text"
              id="userName"
              name="userName"
              placeholder="Nom"
              required
              minLength={3}
              maxLength={126}
            />
            <input
              className="ContactForm__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              maxLength={126}
            />
          </div>
          <textarea
            className="ContactForm__textarea"
            id="message"
            name="message"
            placeholder="Message"
            required
          />
          <button className="button ContactForm__button" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
