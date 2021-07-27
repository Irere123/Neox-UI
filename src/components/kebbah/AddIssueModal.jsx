import React, { useState } from "react";
import Select from "react-select";

import { withFormik } from "formik";
import { graphql, compose } from "react-apollo";
import {
  Close,
  School,
  MusicNote,
  Movie,
  Work,
  Assignment,
  Face,
  Favorite,
  Subject,
  Terrain,
} from "@material-ui/icons";
import { Chip } from "@material-ui/core";
import {
  allIssuesQuery as issuesQuery,
  createIssueMutation,
} from "../../graphql/issue";

function AddIssueModal({
  onClose,
  teamsName,
  resetForm,
  setFieldValue,
  values,
  handleSubmit,
  isSubmitting,
  handleBlur,
  handleChange,
}) {
  const [category, setCategory] = useState("");
  const [selectedOption, setOption] = useState();

  const handleSelectChange = (selectedOption) => {
    setOption(selectedOption);
    const value = selectedOption.value;
    setFieldValue("teamId", value);
  };

  return (
    <div className="addIssueModal">
      <div className="addIssueModal_content">
        <div className="addIssueModal__header">
          <div
            className="close-icon"
            onClick={(e) => {
              resetForm();
              onClose(e);
            }}
          >
            <Close />
          </div>
          <h1>Add new Issue</h1>
        </div>
        <div className="addIssueModal__center">
          <div className="description__input">
            <label>Description</label>
            <textarea
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              type="text"
              placeholder="Write your long issue description"
              cols="30"
              rows="6"
            />
          </div>
          <div className="category__input">
            <label>
              Category
              <span className="selectedCategory">{category}</span>
            </label>
            <div className="chips">
              <Chip
                icon={<MusicNote />}
                onClick={() => {
                  setCategory("Music");
                  setFieldValue("category", "Music");
                }}
                label="Music"
                color="secondary"
              />
              <Chip
                icon={<School />}
                onClick={() => {
                  setCategory("School");
                  setFieldValue("category", "School");
                }}
                label="School"
                color="secondary"
              />
              <Chip
                icon={<Movie />}
                onClick={() => {
                  setCategory("Cinema");
                  setFieldValue("category", "Cinema");
                }}
                label="Cinema"
                color="secondary"
              />
              <Chip
                icon={<Work />}
                onClick={() => {
                  setCategory("Work");
                  setFieldValue("category", "Work");
                }}
                label="Work"
                color="secondary"
              />
              <Chip
                icon={<Terrain />}
                onClick={() => {
                  setCategory("Earth");
                  setFieldValue("category", "Earth");
                }}
                label="Earth"
                color="secondary"
              />
              <Chip
                icon={<Assignment />}
                onClick={() => {
                  setCategory("Assignment");
                  setFieldValue("category", "Assignment");
                }}
                label="Assignment"
                color="secondary"
              />
              <Chip
                icon={<Subject />}
                onClick={() => {
                  setCategory("Lesson");
                  setFieldValue("category", "Lesson");
                }}
                label="Lesson"
                color="secondary"
              />
              <Chip
                icon={<Face />}
                onClick={() => {
                  setCategory("Family");
                  setFieldValue("category", "Family");
                }}
                label="Family"
                color="secondary"
              />
              <Chip
                icon={<Favorite />}
                onClick={() => {
                  setCategory("Love");
                  setFieldValue("category", "Love");
                }}
                label="Love"
                color="secondary"
              />
            </div>
          </div>
          <div className="team__input_issue">
            <label>Team</label>
            <Select
              onChange={handleSelectChange}
              options={teamsName.map((t) => ({ label: t.name, value: t.id }))}
              placeholder="Select one of your teams"
              isMulti={false}
              isSearchable={true}
            />
          </div>
          <div className="addIssueModal__btn">
            <button disabled={isSubmitting} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compose(
  graphql(createIssueMutation),
  withFormik({
    mapPropsToValues: () => ({ category: "", description: "", teamId: "" }),
    handleSubmit: async (
      values,
      { props: { mutate, onClose, userId, teamIds }, setSubmitting, resetForm }
    ) => {
      await mutate({
        variables: {
          userId,
          teamId: values.teamId,
          category: values.category,
          description: values.description,
        },
        update: (store, { data: { createIssue } }) => {
          const { issue } = createIssue;

          const data = store.readQuery({
            query: issuesQuery,
            variables: { teamIds },
          });
          store.writeQuery({
            query: issuesQuery,
            variables: { teamIds },
            data: {
              ...data,
              allIssues: [issue, ...data.allIssues],
            },
          });
        },
      });
      setSubmitting(false);
      resetForm();
      onClose();
    },
  })
)(AddIssueModal);
