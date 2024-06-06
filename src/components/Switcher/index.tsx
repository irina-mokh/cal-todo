type SwitcherProps = {
  handleToggle: () => void,
};

export const Switcher = ({ handleToggle }: SwitcherProps) => {
  return (
    <div className="switcher">
      <span className="switcher__text">Month</span>
      <input
        className={`switcher__input visually-hidden`}
        id="switcher"
        type="checkbox"
        onChange={handleToggle}
      />
      <label className="switcher__bar" htmlFor="switcher"></label>
      <span className="switcher__text">Week</span>
    </div>
  );
};
