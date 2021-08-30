import React from "react";
import { withFormik } from "formik";
import { MessageOutlined as MessageIcon, AddAPhoto } from "@material-ui/icons";

import FileUpload from "../../../components/FileUpload";
import "../../styles/kousa/SendMessage.css";

const ENTER_KEY = 13;

const SendMessage = ({
  placeholder,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  channelId,
}) => {
  return (
    <>
      <div className="send_message_wrapper">
        <div className="message__input">
          <MessageIcon className="message__inputIcon" />
          <input
            onKeyDown={(e) => {
              if (e.keyCode === ENTER_KEY && !isSubmitting) {
                handleSubmit(e);
              }
            }}
            name="message"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={`Message #${placeholder}`}
          />
          <FileUpload channelId={channelId}>
            <AddAPhoto />
          </FileUpload>
        </div>
      </div>
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ message: "" }),
  handleSubmit: async (
    values,
    { props: { onSubmit }, setSubmitting, resetForm }
  ) => {
    if (!values.message || !values.message.trim()) {
      setSubmitting(false);
      return;
    }

    await onSubmit(values.message);
    resetForm(false);
  },
})(SendMessage);
