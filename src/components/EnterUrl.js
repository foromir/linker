import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "./Modal";
import Subscriptions from "./Subscriptions";

const EnterUrl = ({ handleSubmit, isDashboard, modelOpen }) => {
  const [url, setUrl] = useState("");
  const [confirmUrl, setConfirmUrl] = useState(false);
  const [alert, setAlert] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [description, setDescription] = useState("");
  const [isOpenMadal, setIsOpenMadal] = useState(false);

  const checkUrl = url => {
    // eslint-disable-next-line
    const result = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      url
    );
    result && url.length ? setConfirmUrl(true) : setConfirmUrl(false);
  };

  const checkKeywordDescription = () => {
    if (confirmUrl && keyword) {
      setAlert(true);
        handleSubmit({
          url,
          keyword,
          description
        });
        setUrl("")
        setConfirmUrl(false)
        setKeyword("")
        setDescription("")
    } else {
      setAlert(false);
    }
    setIsOpenMadal(true);
  };

  return (
    <Fragment>
      <div className="enterUrl">
        <div className="enterUrl_wrapInputs">
          <input
            placeholder="Enter Original URL..."
            className="input-default "
            value={url}
            onChange={e => {
              setUrl(e.target.value);
              checkUrl(e.target.value);
            }}
          />
          {confirmUrl && (
            <div className="enterUrl_wrapActionInputs">
              <input
                placeholder="Enter Keyword..."
                className="input-default "
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
              />
              <input
                placeholder="Enter Description..."
                className="input-default "
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          )}
        </div>
        <button
          className="btn default"
          disabled={!confirmUrl}
          onClick={confirmUrl ? checkKeywordDescription : checkUrl}
        >
          Shorten URL
        </button>
      </div>
      {alert && !isDashboard && (
        <div className="enterUrl_alert">
          Congratulations, this keyword is available. Please{" "}
          {/* eslint-disable-next-line */}
          <a onClick={()=>modelOpen('Login')}>Login</a> /{" "}
          {/* eslint-disable-next-line */}
          <a onClick={()=>modelOpen('Register')}>Register</a>
        </div>
      )}

      {/* Modals */}
      <Modal
        open={isOpenMadal}
        close={() => setIsOpenMadal(false)}
        customClass={"SubscriptionsModal"}
      >
          <Subscriptions />
      </Modal>
    </Fragment>
  );
};

EnterUrl.propTypes = {
  handleSubmit: PropTypes.func,
  modelOpen: PropTypes.func,
  isDashboard: PropTypes.bool
};

export default EnterUrl;
