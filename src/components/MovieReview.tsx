import React, { useState } from "react";
import { useDataContext } from "../context/dataContext";
import SubmitExitoso from "./SubmitExitoso";

const MovieReview: React.FC = () => {
  const { data } = useDataContext();
  const [formData, setFormData] = useState({
    movie: "",
    fullName: "",
    email: "",
    review: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    review: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, movie: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    
    if (validateForm()) {
      setFormSubmitted(true);
    } else {
      console.log(errors);
    }
  };

  const handleReset = () => {
    setFormData({
      movie: "",
      fullName: "",
      email: "",
      review: "",
    });
    setErrors({
      fullName: "",
      email: "",
      review: "",
    });
    setFormSubmitted(false);
  };

  const validateForm = () => {
    let isValid = true;

    if (formData.fullName.trim() === "") {      
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "El nombre es obligatorio",
      }));
      isValid = false;
    } else if (formData.fullName.trim().length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "El nombre debe tener al menos 4 caracteres",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, fullName: "" }));
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "El correo electrónico es obligatorio",
      }));
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "El correo electrónico no es válido",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (formData.review.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "La reseña es obligatoria",
      }));
      isValid = false;
    } else if (formData.review.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "La reseña debe tener al menos 10 caracteres",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, review: "" }));
    }

    return isValid;
  };

  return (
    <section id="resena" className="section-review">
      {formSubmitted ? ( 
        <SubmitExitoso fullName={formData.fullName}
        movieName={formData.movie} />
      ) : (
        <div>
        <div className="review-title">
          <h2>Reseña de películas</h2>
          <h3>Deja tu opinion</h3>
        </div>
        <div className="form-wrapper">
          <form className="movie-review-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label className="labelTop">Seleccione película</label>
              <select value={formData.movie} onChange={handleSelectChange}>
                {data?.results.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-wrapper">
              <label className="labelTop">Nombre completo</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>
            <div className="input-wrapper">
              <label className="labelTop">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="input-wrapper">
              <label className="labelTop">Reseña</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
              />
              {errors.review && (
                <span className="error-message">{errors.review}</span>
              )}
            </div>
            <div className="form-buttons">
              <button type="submit">Finalizar</button>
              <button type="button" onClick={handleReset}>
                Reiniciar
              </button>
            </div>
          </form>
        </div>
      </div>
      )}      
    </section>
  );
};

export default MovieReview;
