import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';

import ROUTES from '../../../../routes/const';

const CreateBoard = () => {
  const schema = Yup.object({
    boardName: Yup.string().max(20, 'Max 20').required(),
    url: Yup.string().url().required(),
    descr: Yup.string().min(10, 'Min 10')
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
          <title>Create board - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_BOARDS}>Boards</Link>/
        <Link to={ROUTES.DASHBOARD_BOARDS_CREATE}>Create board</Link>
      </div>
      <div className="dashboard-board__main">
        <div className="dashboard-board__title">Create board</div>
      </div>
      <form className="dashboard-board__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="boardName" className="dashboard-board__label">
          <p>{errors.boardName?.message}</p>
          <input {...register('boardName')} id="boardName" className="dashboard-board__input" name="boardName" />
          <span>Board name</span>
        </label>
        <label htmlFor="url" className="dashboard-board__label">
          <p>{errors.url?.message}</p>
          <input {...register('url')} id="url" className="dashboard-board__input" name="url" type="url" />
          <span>URL</span>
        </label>
        <label htmlFor="descr" className="dashboard-board__label">
          <p>{errors.descr?.message}</p>
          <textarea {...register('descr')} id="descr" className="dashboard-board__textarea" />
          <span>Description</span>
        </label>
        <div className="dashboard-board__form-btn">
          <Links text={'Cancel'} width={147} theme={'link_secondary'} to={ROUTES.DASHBOARD_BOARDS} />
          <Btn text={'Submit'} width={150} theme={'btn_primary'} />
        </div>
      </form>
    </>
  );
};

export default CreateBoard;
