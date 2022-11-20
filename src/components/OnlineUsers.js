import React from 'react'
import { useCollection } from '../hooks/useCollection'

// component
import Avatar from './Avatar'

// styles
import './OnlineUsers.css'

export default function OnlineUsers() {
  const { error, documents } = useCollection('users')

  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className='user-list-item'>
            <Avatar src={user.photoURL} />
            <span>{user.displayName}</span>
            {user.online && <span className="online-user"></span>}
        </div>
      ))}
    </div>
  )
}
