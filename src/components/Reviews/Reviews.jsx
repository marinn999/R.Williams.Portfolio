import s from "./Reviews.module.css";
import img1 from "./img/2.webp";
import img2 from "./img/1.webp";
import img3 from "./img/3.webp";
import { useState } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import toast from "react-hot-toast";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialReviews = [
    {
      id: 1,
      text: "‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’",
      name: "Richard Owens",
      position: "CEO",
      company: "Company 1",
      img: img1,
    },
    {
      id: 2,
      text: "‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’",
      name: "Emily Parker",
      position: "CEO",
      company: "Company 2",
      img: img2,
    },
    {
      id: 3,
      text: "‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astounding. I love the focus, passion and attention to detail in the design.’’",
      name: "Vincent Rudd",
      position: "CEO",
      company: "Company 3",
      img: img3,
    },
  ];

  const loadMoreReviews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://676028426be7889dc35cec65.mockapi.io/comments"
      );
      const loadedReviews = response.data.map((review) => ({
        id: review.id,
        text: review.comment,
        // img: `https://api.dicebear.com/6.x/avataaars/svg?seed=${review.name}`,
        img: `https://ui-avatars.com/api/?name=${review.name}&background=random`,
        position: review.position,
        company: review.company,
        name: review.name,
      }));
      setReviews(loadedReviews);
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }
    setIsLoading(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    loadMoreReviews();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setReviews([]);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className={s.section}>
        <div className={s.leftContainer}>
          <h2 className={s.title}>This is what people say about me</h2>
          <p className={s.text}>
            Here are a few lines from people who I have worked with over the
            past 8+ years in my design career.
          </p>
          <a href="#!" className={s.link} onClick={openModal}>
            See all testimonials
          </a>
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="All testimonials"
            className={s.modal}
            overlayClassName={s.overlay}
          >
            <div className={s.modalHeader}>
              <h2 className={s.modalTitle}>All testimonials</h2>
              <button className={s.modalCloseBtn} onClick={closeModal}>
                Close
              </button>
            </div>

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <ul className={s.modalList}>
                {reviews.map((review) => (
                  <li key={review.id} className={s.modalItem}>
                    <div className={s.modalContainer}>
                      <img
                        className={s.modalImg}
                        src={review.img}
                        alt={review.name}
                        width="80"
                        height="80"
                      ></img>
                      <div className={s.modalTextContainer}>
                        <p className={s.modalItemTextWho}>{review.name}</p>
                        <p className={s.modalItemTextCompany}>
                          {review.position} , {review.company}
                        </p>
                      </div>
                    </div>
                    <p className={s.modalItemText}>{review.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </ReactModal>
        </div>
        <div className={s.rightContainer}>
          <ul className={s.list}>
            {initialReviews.map((review) => (
              <li key={review.id} className={s.item}>
                <img
                  className={s.img}
                  src={review.img}
                  width="760"
                  height="360"
                ></img>

                <div className={s.itemTextContainer}>
                  <p className={s.itemText}>{review.text}</p>
                  <p className={s.itemTextWho}>{review.name}</p>
                  <p className={s.itemTextCompany}>
                    {review.position}, {review.company}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Reviews;
