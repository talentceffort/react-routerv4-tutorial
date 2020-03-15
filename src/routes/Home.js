import React from 'react'

export const Home = ({ history }) => {
  return (
    <div>
        Home
        <button onClick={() => {history.push('/posts')}}>
          버어튼
        </button>
    </div>
  )
}
export default Home
