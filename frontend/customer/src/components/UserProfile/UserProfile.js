import React from 'react'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import styles from './UserProfile.module.css'
import { faUser, faPenToSquare, faKey, faTicket, faClockRotateLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Information from './Information/Information'
import EditInformation from './EditInformation/EditInformation'
import ChangePassword from './ChangePassword/ChangePassword'
import MyTicket from './MyTicket/MyTicket'

export default function UserProfile() {

  const chosen = ({ isActive }) => isActive ? `${styles.chosen} ${styles.item}` : styles.item

  return (
    <div className={styles['UserProfile']}>
      <div className={styles['menu']}>
        <NavLink exact className={chosen} to='/user-profile/'>
          <FontAwesomeIcon className={styles.icon} icon={faUser} style={{ color: '#417DD8', fontSize: '2.8rem' }} />
          <p>Thông tin của bạn</p>
        </NavLink>
        <NavLink className={chosen} to='/user-profile/edit-information'>
          <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} style={{ color: '#417DD8', fontSize: '2.8rem' }} />
          <p>Chỉnh sửa thông tin</p>
        </NavLink>
        <NavLink className={chosen} to='/user-profile/change-password'>
          <FontAwesomeIcon className={styles.icon} icon={faKey} style={{ color: '#417DD8', fontSize: '2.8rem' }} />
          <p>Thay đổi mật khẩu</p>
        </NavLink>
        <NavLink className={chosen} to='/user-profile/my-ticket'>
          <FontAwesomeIcon className={styles.icon} icon={faTicket} style={{ color: '#417DD8', fontSize: '2.8rem' }} />
          <p>Vé xe của tôi</p>
        </NavLink>
        <NavLink className={chosen} to='/user-profile/ticket-history'>
          <FontAwesomeIcon className={styles.icon} icon={faClockRotateLeft} style={{ color: '#417DD8', fontSize: '2.9rem' }} />
          <p>Lịch sử mua vé</p>
        </NavLink>
        <NavLink className={styles.item}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#417DD8', fontSize: '3.2rem' }} />
          <p>Đăng xuất</p>
        </NavLink>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}



