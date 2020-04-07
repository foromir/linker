import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Checkbox from "../Checkbox";
import DropDown from "../DropDown";
import Modal from "../Modal";
import EditModal from "./EditModal";
import Subscriptions from "../Subscriptions";

// Actions
import {
  handleSubmitUrl,
  removeTableItem,
  handleselect,
  handleChecked,
  removeTableItems,
  handleEditDescription,
  handleEditUrl,
  removeClickTableItem,
  changeExpiredTableItem
} from "../../actions/dashboard";

export const Table = ({
  table,
  removeTableItem,
  removeTableItems,
  handleselect,
  handleChecked,
  handleEditDescription,
  handleEditUrl,
  removeClickTableItem,
  changeExpiredTableItem
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedKeywords, setCheckedKeywords] = useState(false);
  const [isOpenMadal, setIsOpenMadal] = useState(false);
  const [typeMadal, setTypeMadal] = useState("");
  const [editItem, setEditItem] = useState("");

  useEffect(() => {
    const SubscriptionsModal = window.localStorage.getItem(
      "SubscriptionsModal"
    );

    if (!SubscriptionsModal) {
      setTypeMadal("SubscriptionsModal");
      setIsOpenMadal(true);
      window.localStorage.setItem("SubscriptionsModal", true);
    }
  }, []);

  useEffect(() => {
    const checked = table.filter(elem => elem.checked);
    const keywords = checked.map(elem => elem.keyword);
    setCheckedKeywords(keywords.join(", "));
    setIsChecked(checked.length);
  }, [table, handleChecked]);

  return (
    <Fragment>
      <div className="tbl_header">Your Links</div>
      <div className="tbl">
        <div className="row">
          <div className="cell cell_icon">
            {isChecked ? (
              <img
                onClick={() => {
                  setIsOpenMadal(true);
                  setTypeMadal("DeleteModalMulti");
                }}
                className="icon_delete"
                src="/images/delete.svg"
                alt="delete"
              />
            ) : (
              ""
            )}
          </div>
          <div className="cell cell_header cell_link">Original URL</div>
          <div className="cell cell_header cell_keywords">Keyword</div>
          <div className="cell cell_header cell_expiration">
            Expiration <span>CET</span>
          </div>
          <div className="cell cell_header cell_click">Clicks</div>
        </div>
        {table.map((elem, index) => {
          if (elem.active) {
            return (
              <div className="row" key={elem.id + index}>
                <div className="cell cell_icon">
                  <Checkbox
                    checked={elem.checked}
                    handleChecked={checked =>
                      handleChecked({ id: elem.id, checked })
                    }
                  />
                </div>
                <div className="cell cell_link">
                  <div className="wrap_link">{elem.url}</div>
                  <img
                    className="icon_info"
                    src="/images/info.svg"
                    alt="info"
                    onClick={() => {
                      setEditItem(elem);
                      setIsOpenMadal(true);
                      setTypeMadal("EditDescriptionModal");
                    }}
                  />
                  <img
                    className="icon_edit"
                    src="/images/edit.svg"
                    alt="edit"
                    onClick={() => {
                      setEditItem(elem);
                      setIsOpenMadal(true);
                      setTypeMadal("EditUrlModal");
                    }}
                  />
                </div>
                <div className="cell cell_keywords">
                  {elem.keyword}
                  <div className="tooltip">{elem.url}</div>
                </div>
                <div className="cell cell_expiration">{elem.expiration}</div>
                <div className="cell cell_click">
                  {elem.clicks ? (
                    <div
                      className="text_hover"
                      onClick={() => {
                        setEditItem(elem);
                        setIsOpenMadal(true);
                        setTypeMadal("ClickModal");
                      }}
                    >
                      {elem.clicks}
                    </div>
                  ) : (
                    elem.clicks
                  )}
                  <span className="cell_wrapIcons">
                    <DropDown handleselect={handleselect} url={elem.url} />
                    <img
                      className="icon_edit"
                      src="/images/delete.svg"
                      alt="edit"
                      onClick={() => {
                        setEditItem(elem);
                        setIsOpenMadal(true);
                        setTypeMadal("DeleteModal");
                      }}
                    />
                  </span>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row expired" key={elem.id + index}>
                <div className="cell cell_icon">
                  <Checkbox
                    checked={elem.checked}
                    handleChecked={checked =>
                      handleChecked({ id: elem.id, checked })
                    }
                  />
                </div>
                <div className="cell cell_link">
                  <div className="wrap_link">{elem.url}</div>
                  <img
                    className="icon_info"
                    src="/images/info.svg"
                    alt="info"
                    onClick={() => {
                      setEditItem(elem);
                      setIsOpenMadal(true);
                      setTypeMadal("EditDescriptionModal");
                    }}
                  />
                  <img
                    className="icon_edit"
                    src="/images/edit.svg"
                    alt="edit"
                    onClick={() => {
                      setEditItem(elem);
                      setIsOpenMadal(true);
                      setTypeMadal("EditUrlModal");
                    }}
                  />
                </div>
                <div className="cell cell_keywords">
                  {elem.keyword}
                  <div className="tooltip">{elem.url}</div>
                </div>
                <div
                  className="cell cell_expiration text_hover"
                  onClick={() => {
                    setEditItem(elem);
                    setIsOpenMadal(true);
                    setTypeMadal("ExpiredModal");
                  }}
                >
                  {elem.expiration}
                </div>
                <div className="cell cell_click">
                  {elem.clicks ? (
                    <div className="text_hover">{elem.clicks}</div>
                  ) : (
                    elem.clicks
                  )}
                  <span className="cell_wrapIcons">
                    <img
                      className="icon_edit"
                      src="/images/exclamation-sign.svg"
                      alt="edit"
                      onClick={() => {
                        setEditItem(elem);
                        setIsOpenMadal(true);
                        setTypeMadal("ExpiredModal");
                      }}
                    />
                    <img
                      className="icon_edit"
                      src="/images/delete.svg"
                      alt="edit"
                      onClick={() => {
                        setEditItem(elem);
                        setIsOpenMadal(true);
                        setTypeMadal("DeleteModal");
                      }}
                    />
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Modals */}
      <Modal
        open={isOpenMadal}
        close={() => setIsOpenMadal(false)}
        customClass={typeMadal}
      >
        {typeMadal === "EditDescriptionModal" && (
          <EditModal
            close={() => setIsOpenMadal(false)}
            handleSubmit={handleEditDescription}
            editItemId={editItem.id}
            editItemValue={editItem.description}
            text="Link Description"
            placeholder="Enter description..."
            inputName="description"
            buttonText="Save Changes"
          />
        )}
        {typeMadal === "EditUrlModal" && (
          <EditModal
            close={() => setIsOpenMadal(false)}
            handleSubmit={handleEditUrl}
            editItemId={editItem.id}
            editItemValue={editItem.url}
            text="Original URL"
            placeholder="Enter url..."
            inputName="url"
            buttonText="Save Changes"
          />
        )}
        {typeMadal === "DeleteModal" && (
          <EditModal
            close={() => setIsOpenMadal(false)}
            handleSubmit={removeTableItem}
            editItemId={editItem.id}
            description={`Are you sure you want to permanently delete ${editItem.keyword} ?`}
            text="Delete Link"
            buttonText="Confirm"
          />
        )}
        {typeMadal === "DeleteModalMulti" && (
          <EditModal
            close={() => setIsOpenMadal(false)}
            handleSubmit={removeTableItems}
            description={`Are you sure you want to permanently delete ${checkedKeywords} ?`}
            text="Delete Links"
            buttonText="Confirm"
          />
        )}
        {typeMadal === "ClickModal" && (
          <EditModal
            close={() => setIsOpenMadal(false)}
            handleSubmit={removeClickTableItem}
            editItemId={editItem.id}
            description="Reset clicks to 0"
            text="Clicks correction"
            buttonText="Confirm"
          />
        )}
        {typeMadal === "ExpiredModal" && (
          <EditModal
            expiredModal
            description="Start a new subscription for this link?"
            close={() => setIsOpenMadal(false)}
            handleSubmit={({ id, value }) => {
              changeExpiredTableItem({ id, value });
              setTimeout(() => {
                setTypeMadal("SubscriptionsModal");
                setIsOpenMadal(true);
              }, 500);
            }}
            editItemId={editItem.id}
            text="Expired Link"
            buttonText="Yes"
          />
        )}

        {typeMadal === "SubscriptionsModal" && <Subscriptions />}
      </Modal>

      {/* Modals end */}
    </Fragment>
  );
};

Table.propTypes = {
  table: PropTypes.array,
  removeTableItem: PropTypes.func,
  handleselect: PropTypes.func,
  removeTableItems: PropTypes.func,
  handleEditDescription: PropTypes.func,
  handleChecked: PropTypes.func,
  handleEditUrl: PropTypes.func,
  removeClickTableItem: PropTypes.func,
  changeExpiredTableItem: PropTypes.func
};

const mapStateToProps = state => ({
  table: state.table.table
});

const mapDispatchToProps = {
  handleSubmitUrl,
  removeTableItem,
  handleselect,
  removeTableItems,
  handleChecked,
  handleEditDescription,
  handleEditUrl,
  removeClickTableItem,
  changeExpiredTableItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
