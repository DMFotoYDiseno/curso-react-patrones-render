import React from 'react';
import { useStorageListener } from './withStorageListener';
/* import { withStorageListener } from './withStorageListener'; */
import './ChangeAlert.css';

/* function ChangeAlert({ show, toggleShow }) { */
function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener({sincronize});

if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

/* const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert); */

/* export { ChangeAlertWithStorageListener }; */
export { ChangeAlert };