import React from "react";
import "./editWorkspaces.scss";
import TitleClient from "../components/Title/TitleClient";
import ClientButton from "../../../UI/clientButton/ClientButton";
import ClientCancel from "../../../UI/clientCancel/ClientCancel";
import ROUTES from "../../../routes/const";
import InputClient from "../components/Input/InputClient";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupValidation } from "../components/signupValidation/signupValidation";

const EditWorkspaces = () => {
  return (
    <div className="edit-workspaces">
      <div className="edit-workspaces__body">
        <div className="edit-workspaces__top">
          <TitleClient text={"Edit Workspace"} />
        </div>
        <div className="edit-workspaces__bottom">
          <EditForm />
        </div>
      </div>
    </div>
  );
};

export default EditWorkspaces;

const initialValues = {
  newName: "",
  subdomain: "",
};

const EditForm = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(signupValidation),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="edit-workspaces__form">
      <div className="edit-workspaces__form-body">
        <div className="edit-workspaces__form-left">
          <div className="edit-workspaces__form-wrapper">
            <div className="edit-workspaces__form-title">New Name</div>
            <div className="edit-workspaces__input-wrapper">
              <InputClient
                type={"text"}
                name={"newName"}
                placeholder={"Name of workspace"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newName}
                errors={errors.newName}
              />
              {errors.newName && (
                <small className="edit-workspaces__error">
                  {errors.newName}
                </small>
              )}
            </div>
          </div>
        </div>
        <div className="edit-workspaces__form-right">
          <div className="edit-workspaces__form-wrapper">
            <div className="edit-workspaces__form-title">Subdomain</div>
            <div className="edit-workspaces__input-wrapper">
              <InputClient
                type={"text"}
                name={"subdomain"}
                placeholder={"Name of workspace"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subdomain}
                errors={errors.subdomain}
              />
              {errors.subdomain && (
                <small className="edit-workspaces__error">
                  {errors.subdomain}
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="edit-workspaces__buttons">
        <ClientCancel
          name={"name2"}
          text={"Cancel"}
          to={ROUTES.CLIENT_WORKSPACES}
        />
        <ClientButton
          to={ROUTES.CLIENT_WORKSPACES_ADD}
          width={182}
          text={"Submit"}
          theme={"clientbutton_primary"}
          type="submit"
        />
      </div>
    </form>
  );
};
