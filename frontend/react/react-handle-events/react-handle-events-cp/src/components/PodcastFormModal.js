import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import Constants from "../Constants";
import './PodcastFormModal.css';

const PodcastFormModal = (props) => {
  const {
    podcastList,
    setPodcastList,
    showFormModal,
    setShowFormModal,
    setFormModalType,
    formModalType,
    podcastId,
  } = props;
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // TODO: answer here
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async () => {
    // TODO: answer here
    try {
      if (formModalType === "ADD") {
        const response = await axios.post(Constants.API_URL, formValues);
        setPodcastList([...podcastList, response.data]);
      } else {
        const response = await axios.put(`${Constants.API_URL}/${podcastId}`, formValues);
        const updatePodcastList = podcastList.map((item) => {
          if (item.id === podcastId) {
            return response.data;
          }
          return item;
        });
        setPodcastList(updatePodcastList);
        setFormModalType("ADD");
      }
      setFormValues({});
      setShowFormModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onCloseModal = () => {
    // TODO: answer here
    setShowFormModal(false);
  };

  const getPodcastById = async () => {
    // TODO: answer here
    try {
      const response = await axios.get(`${Constants.API_URL}/${podcastId}`);
      const podcast = response.data;
      setFormValues({
        title: podcast.title,
        episode: podcast.episode,
        genre: podcast.genre,
        duration: podcast.duration,
        publisher: podcast.publisher,
        summary: podcast.summary,
        imageUrl: podcast.imageUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // TODO: answer here
    if(formModalType === "UPDATE") {
      getPodcastById();
    }
  }, [showFormModal]);

  return (
    <Modal show={showFormModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{formModalType} PODCAST</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="modal-input-container">
            <label className="modal-input">Title :</label>
            <input
              aria-label="title"
              name="title"
              type="text"
              onChange={handleInputChange}
              value={formValues.title ? formValues.title : ""}
              className="modal-input"
            ></input>
          </div>
          <div className="modal-input-container">
            <label className="modal-input">Episode :</label>
            <input
              aria-label="episode"
              name="episode"
              type="number"
              onChange={handleInputChange}
              value={formValues.episode ? formValues.episode : ""}
              className="modal-input"
            ></input>
          </div>
          <div className={"modal-input-container"}>
            <label className="modal-input">Genre : </label>
            <input
              aria-label="genre"
              name="genre"
              type="text"
              onChange={handleInputChange}
              value={formValues.genre ? formValues.genre : ""}
              className="modal-input"
            ></input>
          </div>
          <div className={"modal-input-container"}>
            <label className="modal-input">Duration : </label>
            <input
              aria-label="duration"
              name="duration"
              type="number"
              onChange={handleInputChange}
              value={formValues.duration ? formValues.duration : ""}
              className="modal-input"
            ></input>
          </div>
          <div className={"modal-input-container"}>
            <label className="modal-input">Publisher : </label>
            <input
              aria-label="publisher"
              name="publisher"
              type="text"
              onChange={handleInputChange}
              value={formValues.publisher ? formValues.publisher : ""}
              className="modal-input"
            ></input>
          </div>
          <div className={"modal-input-container"}>
            <label className="modal-input">Summary : </label>
            <textarea
              aria-label="summary"
              name="summary"
              type="text"
              onChange={handleInputChange}
              value={formValues.summary ? formValues.summary : ""}
              className="modal-input"
            ></textarea>
          </div>
          <div className={"modal-input-container"}>
            <label className="modal-input">Image URL : </label>
            <textarea
              aria-label="imageUrl"
              name="imageUrl"
              type="text"
              onChange={handleInputChange}
              className="modal-input"
              value={formValues.imageUrl ? formValues.imageUrl : ""}
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          aria-label="close-btn"
          variant="secondary"
          onClick={onCloseModal}
        >
          Close
        </Button>
        <Button
          aria-label="submit-btn"
          variant="primary"
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PodcastFormModal;
