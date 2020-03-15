import React from 'react'

export const About = ({ match }) => {
  return (
      <div>
        {match.params.username} 의 소개
      </div>
    )
}

export default About


