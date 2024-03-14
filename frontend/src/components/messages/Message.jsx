import React from 'react'

const Message = () => {
  return (
    <div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public/18" alt="avatar" />
                </div>
            </div>

            <div className="chat-bubble text-white bg-blue-500">Hi! What is up?</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">11:11</div>
        </div>
    </div>
  )
}

export default Message