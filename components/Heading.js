import config from '../config'

const Heading = ({ children }) => (
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
export default Heading
