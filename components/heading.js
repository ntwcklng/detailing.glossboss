import config from '../config'

export default ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        text-align: center;
        color: ${config.mainColor};
        letter-spacing: 2px;
      }
    `}</style>
  </h1>
)
