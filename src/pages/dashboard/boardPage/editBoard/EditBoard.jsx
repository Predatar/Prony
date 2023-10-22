import React from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { MdDragIndicator, MdCancel } from 'react-icons/md';

import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';
import Switch from '../../../../UI/switch/Switch';
import Radio from '../../../../UI/radio/Radio';

import ROUTES from '../../../../routes/const';

import styles from './index.module.scss';

const EditBoard = () => {
  return (
    <>
      <div className="dashboard-board__path">
        <Helmet>
          <title>Create board - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_BOARDS}>Boards</Link>/
        <Link to={ROUTES.DASHBOARD_BOARDS_CREATE}>Edit board post</Link>
      </div>
      <div className="dashboard-board__main">
        <div className="dashboard-board__title">Edit board post form</div>
        <Btn text={'Add field'} width={121} theme={'btn_primary'} />
      </div>
      <form className="dashboard-board__form dashboard-board__form_long">
        <div>
          <div>
            <div className={styles.drag}>
              <MdDragIndicator />
            </div>
            <div className={styles.title}>Title</div>
          </div>
          <div style={{ marginTop: '9px', display: 'flex', alignItems: 'center' }}>
            <input type="text" name="" id="" className={styles.input} placeholder="Enter title" />
            <div className={styles.inputWrapper}>
              <span>
                <Switch />
              </span>
              Required
            </div>
            <div className={styles.privacy}>
              <div className={styles.privacyTitle}>Privacy</div>
              <div className={styles.privacyInput}>
                <Radio name={'privacy'} />
                Public
              </div>
              <div className={styles.privacyInput}>
                <Radio name={'privacy'} />
                Private
              </div>
            </div>
            <div className={styles.cancel}>
              <MdCancel />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.drag}>
              <MdDragIndicator />
            </div>
            <div className={styles.title}>Details</div>
          </div>
          <div style={{ marginTop: '9px', display: 'flex' }}>
            <textarea type="text" name="" id="" className={styles.textarea} placeholder="Enter post title" />
            <div className={styles.inputWrapper} style={{ alignItems: 'flex-start', marginTop: '16px' }}>
              <span>
                <Switch />
              </span>
              Required
            </div>
            <div className={styles.privacy} style={{ alignItems: 'flex-start', marginTop: '15px' }}>
              <div className={styles.privacyTitle}>Privacy</div>
              <div className={styles.privacyInput}>
                <Radio name={'privacy'} />
                Public
              </div>
              <div className={styles.privacyInput}>
                <Radio name={'privacy'} />
                Private
              </div>
            </div>
            <div className={styles.cancel} style={{ alignItems: 'flex-start', marginTop: '15px' }}>
              <MdCancel />
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
