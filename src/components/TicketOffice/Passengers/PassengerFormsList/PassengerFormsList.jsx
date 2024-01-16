import React, { useState, useCallback, useEffect } from "react";
import PassengerForm from "../PassengerForm/PassengerForm";
import "./PassengerFormsList.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addPassengerForm,
  removePassengerForm,
} from "../../../../redux/passengersFormsData";
import CollapsIconMinus from "../../commonTicketsComponents/svgComponents/CollapsIconMinus";
import CollapsIconPlus from "../../commonTicketsComponents/svgComponents/CollapsIconPlus";
import RemoveIcon from "../../commonTicketsComponents/svgComponents/RemoveIcon";
import AddIcon from "../../commonTicketsComponents/svgComponents/AddIcon";

const PassengerFormsList = ({ numOfPassengersForms, setIsFormsFilled }) => {
  const dispatch = useDispatch();

  const [formIds, setFormIds] = useState([]);
  const [collapsedForms, setCollapsedForms] = useState({});

  const passengersFormsData = useSelector((state) => state.passengersFormsData);
  const listPassengersFormsData = passengersFormsData.passengersFormsData;

  useEffect(() => {
    if (listPassengersFormsData.length > 0) {
      setFormIds(listPassengersFormsData.map((form) => form.idPassenger));
    } else {
      const newFormIds = [];
      for (let i = 0; i < numOfPassengersForms; i++) {
        const newId = nanoid();
        newFormIds.push(newId);
        dispatch(addPassengerForm({ idPassenger: newId }));
      }
      setFormIds(newFormIds);
    }
  }, [dispatch, numOfPassengersForms, listPassengersFormsData]);
  
  

  const checkIsFormsFilled = useCallback(() => {
    if (listPassengersFormsData.length === numOfPassengersForms) {
      return listPassengersFormsData.every((passenger) => passenger.isValid);
    }
    return false;
  }, [numOfPassengersForms, listPassengersFormsData]);

  useEffect(() => {
    setIsFormsFilled(checkIsFormsFilled());
  }, [listPassengersFormsData, checkIsFormsFilled, setIsFormsFilled]);

  const handleAddForm = () => {
    if (formIds.length < numOfPassengersForms) {
      const newId = nanoid();
      setFormIds((currentIds) => [...currentIds, newId]);
      dispatch(addPassengerForm({ idPassenger: newId }));
    }
  };
  

  const removePassenger = (idToRemove) => {
    setFormIds((currentIds) => currentIds.filter((id) => id !== idToRemove));
    dispatch(removePassengerForm(idToRemove));
  };

  const toggleFormCollapse = (id) => {
    setCollapsedForms((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="PassengerFormsList">
      {formIds.map((id, index) => (
        <div key={id} className="PassengerFormCard">
          <div className="PassengerCard__header">
            <div
              className="PassengerCard__header-icon"
              onClick={() => toggleFormCollapse(id)}
            >
              <span>
                {collapsedForms[id] ? (
                  <CollapsIconPlus />
                ) : (
                  <CollapsIconMinus />
                )}
              </span>
            </div>

            <h5 className="PassengerCard__header-title">
              Пассажир {index + 1}
            </h5>

            <button
              className="PassengerCard__header-remove"
              onClick={() => removePassenger(id)}
            >
              <RemoveIcon />
            </button>
          </div>

          {!collapsedForms[id] && (
            <div className="PassengerCard__main">
              <PassengerForm idPassenger={id} />
            </div>
          )}
        </div>
      ))}

      {formIds.length < numOfPassengersForms && (
        <button
          className="PassengerFormsList__add-new-passenger"
          onClick={handleAddForm}
        >
          <p>Добавить пассажира</p>
          <AddIcon />
        </button>
      )}
    </div>
  );
};

export default PassengerFormsList;
