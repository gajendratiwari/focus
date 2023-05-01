import { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import useInput from "../../hooks/useinput";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../hooks/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

// import useHttp from "../../hooks/use-http";
// import { addQuote } from "../../lib/api";

const ContactForm = () => {
  // const { sendRequest, status, error } = useHttp(addQuote);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,

    reset: resetEmailInput,
  } = useInput((value) => value !== "");

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphoneInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredPhoneIsValid &&
      !enteredEmailIsValid &&
      !enteredMessageIsValid
    ) {
      return;
    }

    // Add a new document in collection "cities"
    try {
      const response = await addDoc(collection(db, "customers"), {
        firstame: { enteredFirstName },
        lastname: { enteredLastName },
        email: { enteredEmail },
        phone: { enteredPhone },
        message: { enteredMessage },
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }

    // sendRequest({
    //   enteredFirstName,
    //   enteredLastName,
    //   enteredEmail,
    //   enteredPhone,
    //   enteredMessage,
    // });

    resetFirstNameInput();
    resetlastNameInput();
    resetphoneInput();
    resetEmailInput();
    resetMessageInput();
  };

  return (
    <div className={classes.contactForm}>
      <div className={classes.cotactFormContent}>
        <p>
          Fill out this short form and a member of our team will get back to you
          within 24 hours
        </p>
        {/* {status ? (
          <p className={classes.successMessage}>Form successfully submitted!</p>
        ) : (
          error
        )} */}
        <form onSubmit={formSubmissionHandler}>
          <div
            className={
              firstNameInputHasError
                ? `${`${classes.formcontrol} ${classes.invalid}`}`
                : `${classes.formcontrol}`
            }
          >
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="name"
              onChange={firstNameChangedHandler}
              value={enteredFirstName}
              onBlur={firstNameBlurHandler}
            />
            {firstNameInputHasError && (
              <p className={classes.errortext}>First Name must not be Empty</p>
            )}
          </div>
          <div
            className={
              lastNameInputHasError
                ? `${`${classes.formcontrol} ${classes.invalid}`}`
                : `${classes.formcontrol}`
            }
          >
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={lastNameChangedHandler}
              value={enteredLastName}
              onBlur={lastNameBlurHandler}
            ></input>
            {lastNameInputHasError && (
              <p className={classes.errortext}>Last Name must not be Empty</p>
            )}
          </div>
          <div
            className={
              emailInputHasError
                ? `${`${classes.formcontrol} ${classes.invalid}`}`
                : `${classes.formcontrol}`
            }
          >
            <label htmlFor="emaile">Email</label>
            <input
              type="text"
              id="email"
              onChange={emailChangedHandler}
              value={enteredEmail}
              onBlur={emailBlurHandler}
            ></input>
            {emailInputHasError && (
              <p className={classes.errortext}>Email must not be Empty</p>
            )}
          </div>
          <div
            className={
              phoneInputHasError
                ? `${`${classes.formcontrol} ${classes.invalid}`}`
                : `${classes.formcontrol}`
            }
          >
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              onChange={phoneChangedHandler}
              value={enteredPhone}
              onBlur={phoneBlurHandler}
            ></input>
            {phoneInputHasError && (
              <p className={classes.errortext}>Phone no must not be Empty</p>
            )}
          </div>
          <div
            className={
              messageInputHasError
                ? `${`${classes.formcontrol} ${classes.invalid}`}`
                : `${classes.formcontrol}`
            }
          >
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              onChange={messageChangedHandler}
              value={enteredMessage}
              onBlur={messageBlurHandler}
              rows="4"
              cols="50"
              maxLength="300"
            ></input>
            {messageInputHasError && (
              <p className={classes.errortext}>Message must not be Empty</p>
            )}
          </div>
          <div className={classes.formactions}>
            <button disabled={!formIsValid} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
