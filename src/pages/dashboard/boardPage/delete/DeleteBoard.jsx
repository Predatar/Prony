import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';

import ROUTES from '../../../../routes/const';

const DeleteBoard = () => {
  const schema = Yup.object({
    boardName: Yup.string().max(20, 'Max 20').required()
  });
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = date => console.log(date);
  return (
    <>
      <div className="dashboard-board__path">
        <Helmet>
          <title>Delete board - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_BOARDS}>Boards</Link>/
        <Link to={ROUTES.DASHBOARD_BOARDS_CREATE}>Delete board</Link>
      </div>
      <div className="dashboard-board__main">
        <div className="dashboard-board__title">Delete board</div>
      </div>
      <form className="dashboard-board__form">
        <div className="dashboard-board__text">
          This action will permanently delete the board and its content and cannot be undone. <br /> Please enter the
          board name to confirm.
        </div>
        <label htmlFor="" className="dashboard-board__label">
          <p>{errors.boardName?.message}</p>
          <input
            {...register('boardName')}
            id="boardName"
            className="dashboard-board__input"
            name="boardName"
            type="text"
          />
          <span>Board name</span>
        </label>
        <div className="dashboard-board__form-btn">
          <Links text={'Cancel'} width={147} theme={'link_secondary'} to={ROUTES.DASHBOARD_BOARDS} />
          <Btn text={'Delete'} width={150} theme={'btn_warning'} />
        </div>
      </form>
    </>
  );
};

export default DeleteBoard;
