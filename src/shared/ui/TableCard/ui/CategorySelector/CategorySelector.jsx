import { useState, useRef, useEffect, forwardRef } from "react";
import clsx from "clsx";
import css from "./CategorySelector.module.css";
import ArrowIcon from "./assets/arrow.svg?react";

const CategorySelector = forwardRef(
  ({ value, onChange, onBlur, name, error, list, placeholder }, ref) => {
    const [selectedItem, setSelectedItem] = useState(value || null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      setSelectedItem(value);
    }, [value]);

    const handleItemSelect = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
      onChange?.(item);
      onBlur?.();
    };

    return (
      <div className={css.selectorWrapper}>
        <div className={css.customSelect} ref={dropdownRef}>
          <button
            type="button"
            className={clsx(css.selectButton, selectedItem && css.hasValue)}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span>{selectedItem || placeholder}</span>
            <ArrowIcon
              className={clsx(css.arrowIcon, isOpen && css.arrowOpen)}
              role="img"
              aria-label="arrow icon"
            />
          </button>

          <input
            type="hidden"
            name={name}
            value={selectedItem || ""}
            ref={ref}
          />

          <div
            className={clsx(css.dropdownMenu, isOpen && css.menuOpen)}
            role="listbox"
          >
            <ul className={css.list}>
              {list.map((item, idx) => (
                <li
                  key={idx}
                  className={css.item}
                  onClick={() => handleItemSelect(item)}
                  role="option"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {error && <span className={css.errorMessage}>{error}</span>}
      </div>
    );
  }
);

CategorySelector.displayName = "CategorySelector";

export default CategorySelector;
