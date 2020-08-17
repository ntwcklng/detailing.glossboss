import config from '../config'
const SubHeading = ({ children }) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        text-align: center;
        color: ${config.lightText};
      }
    `}</style>
  </h2>
)
export default SubHeading
