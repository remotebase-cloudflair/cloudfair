import React from 'react'

function Notifications() {
  const notifications = [
    {
      from: {
        name: 'Abdul Rehman',
        profileUrl: 'https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg',
      },
      notificationText: 'has accepted to offer you a home.'
    },
    {
      from: {
        name: 'Abdul Rehman',
        profileUrl: 'https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg',
      },
      notificationText: 'has accepted to offer you a home.'
    }
  ]
  return (
    <div className='p-8 text-black'>
      <h1 className='text-4xl'>Notifications</h1>
      <div className='mx-auto max-w-5xl 2xl:max-w-7xl py-8 space-y-2'>
        {notifications.map(notification => (
          <div className='py-4 px-8 shadow flex flex-row space-x-4'>
            <img src={notification.from.profileUrl} className='w-24 h-24 rounded-full' />
            <div className='flex-grow py-2'>
              <p className='font-semibold text-black text-3xl'>
                {notification.from.name + ' ' + notification.notificationText}
              </p>
            </div>
            <div className='py-4 flex-shrink-0'>
              <p className='font-semibold text-black text-xs'>30 mins</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications