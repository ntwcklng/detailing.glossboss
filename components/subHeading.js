import config from '../config'
export default({children}) => (
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