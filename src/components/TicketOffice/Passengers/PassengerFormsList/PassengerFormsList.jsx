import React, { useState, useCallback, useEffect } from "react";
import PassengerForm from "../PassengerForm/PassengerForm";
import "./PassengerFormsList.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addPassengerForm,
  clearPassengerForms,
  removePassengerForm,
} from "../../../../redux/passengersFormsData";
import CollapsIconMinus from "../../commonTicketsComponents/svgComponents/CollapsIconMinus";
import CollapsIconPlus from "../../commonTicketsComponents/svgComponents/CollapsIconPlus";
import RemoveIcon from "../../commonTicketsComponents/svgComponents/RemoveIcon";
import AddIcon from "../../commonTicketsComponents/svgComponents/AddIcon";

const PassengerFormsList = ({ numOfPassengersForms, setIsFormsFilled }) => {
  const dispatch = useDispatch();
  const [activeForms, setActiveForms] = useState(1);
  const [formIds, setFormIds] = useState([]);
  const [collapsedForms, setCollapsedForms] = useState({});

  const passengersFormsData = useSelector((state) => state.passengersFormsData);
  const listPassengersFormsData = passengersFormsData.passengersFormsData;

  useEffect(() => {
    dispatch(clearPassengerForms());
  }, [dispatch]);

  useEffect(() => {
    if (formIds.length === 0) {
      const initialId = nanoid();
      setFormIds([initialId]);
      dispatch(addPassengerForm({ idPassenger: initialId }));
    }
  }, [dispatch, formIds.length]);

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
    if (activeForms < numOfPassengersForms) {
      const newId = nanoid();
      setActiveForms(activeForms + 1);
      setFormIds((currentIds) => [...currentIds, newId]);
      dispatch(addPassengerForm({ idPassenger: newId }));
    }
  };

  const removePassenger = (idToRemove) => {
    setActiveForms(activeForms - 1);
    setFormIds((currentIds) => currentIds.filter((id) => id !== idToRemove));
    dispatch(removePassengerForm(idToRemove));
  };

  const toggleFormCollapse = (id) => {
    setCollapsedForms((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="PassengerFormsList">
      {formIds.map((id, index) => (
        <div key={id} className="PassengerCard">
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

      {activeForms < numOfPassengersForms && (
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
