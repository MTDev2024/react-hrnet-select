import "./Select.css";

/**
 * A lightweight and accessible React select component.
 *
 * @param {Object[]} options - Array of options with { value, label }
 * @param {string} value - Currently selected value
 * @param {function} onChange - Callback when selection changes
 * @param {string} [placeholder] - Optional placeholder text
 * @param {string} [className] - Optional CSS class for custom styling
 * @param {string} [id] - Optional id for label association
 * @param {string} [ariaLabel] - Optional aria-label if no visible label
 * @param {boolean} [disabled] - Optional disabled state
 */
function Select({
  options,
  value,
  onChange,
  placeholder,
  className,
  id,
  ariaLabel,
  disabled,
}) {
  return (
    <div className="select-container">
      <select
        id={id}
        className={`select-native ${className || ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
