import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';
import Radio from '../../../../UI/radio/Radio';
import Switch from '../../../../UI/switch/Switch';
import Checkbox from '../../../../UI/checkbox/Checkbox';

import ROUTES from '../../../../routes/const';

import styles from './index.module.scss';

const EditBoard = () => {
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
        <Link to={ROUTES.DASHBOARD_BOARDS_CREATE}>Edit oard</Link>
      </div>
      <div className="dashboard-board__main">
        <div className="dashboard-board__title">Edit Board</div>
      </div>
      <form className="dashboard-board__form dashboard-board__form_long" onSubmit={handleSubmit(onSubmit)}>
        <div className="dashboard-board__wrapper">
          <div className="dashboard-board__container">
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
          </div>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <label className="dashboard-board__label">Privacy</label>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Radio name={'privacy'} />
                </div>
                <div>
                  <div className={styles.title}>Public</div>
                  <div className={styles.subtitle}>
                    The board is visible to anyone. Search engines like Google will index it.
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Radio name={'privacy'} />
                </div>
                <div>
                  <div className={styles.title}>Private</div>
                  <div className={styles.subtitle}>Only people added to the board can access it</div>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <label className="dashboard-board__label">Status</label>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Radio name={'status'} />
                </div>
                <div>
                  <div className={styles.title}>Locked</div>
                  <div className={styles.subtitle}>Only Board Moderators can create new posts</div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Radio name={'status'} />
                </div>
                <div>
                  <div className={styles.title}>Unlocked</div>
                  <div className={styles.subtitle}>Anybody can post</div>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Switch />
                </div>
                <div>
                  <div className={styles.title}>Board on roadmap</div>
                  <div className={styles.subtitle}>
                    By default, your board is visible on your roadmap. Turn it off if you don’t want your board and its
                    posts to be shown there.
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Switch />
                </div>
                <div>
                  <div className={styles.title}>Indexed</div>
                  <div className={styles.subtitle}>
                    By default, your board will be indexed by search engines like Google. Turn it off if you don’t want
                    that
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Checkbox name={'a'} />
                </div>
                <div>
                  <div className={styles.title}>Post require pre approval</div>
                  <div className={styles.subtitle}>
                    All new posts should be approved by moderators before going public
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.radio}>
                  <Checkbox name={'a'} />
                </div>
                <div>
                  <div className={styles.title}>Anonymous voting</div>
                  <div className={styles.subtitle}>Allow anonymous votes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-board__form-btn">
          <Links text={'Cancel'} width={147} theme={'link_secondary'} to={ROUTES.DASHBOARD_BOARDS} />
          <Btn text={'Submit'} width={150} theme={'btn_primary'} />
        </div>
      </form>
    </>
  );
};

export default EditBoard;
