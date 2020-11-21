const ArrowDown = ({ toggle }) => (
  <div>
    <svg
      enableBackground="new 0 0 50 50"
      className={toggle ? 'isToggled' : ''}
      viewBox="0 0 50 50"
    >
      <rect fill="none" />
      <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
    </svg>
    <style jsx>{`
      svg {
        height: 30px;
        transition: 200ms ease;
        fill: #fff;
      }
      svg.isToggled {
        transform: rotate(180deg);
      }
      div {
        z-index: 2;
      }
    `}</style>
  </div>
)
export default ArrowDown
