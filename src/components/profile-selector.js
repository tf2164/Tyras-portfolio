import React from 'react';
import './profileselect.css';

export default function ProfileDropdown({ value = 'web', onChange }) {
    const [open, setOpen] = React.useState(false);

    const displayOptions = [
        { value: 'web', label: 'Web Apps' },
        // { value: 'mobile', label: 'Mobile Apps' },
        // { value: 'games', label: 'Games' },
    ];

    const selectedDisplay = displayOptions.find(opt => opt.value === value);

    return (
        <div className="profile-dropdown">
            <span className="profile-dropdown-brace profile-dropdown-brace--left">
                {'{ '}
            </span>
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                className="profile-dropdown-button"
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className="profile-dropdown-button-text">
                    {selectedDisplay ? selectedDisplay.label : 'Select...'}
                </span>
                <span className={`profile-dropdown-arrow ${open ? 'profile-dropdown-arrow--open' : ''}`}>
                    ▼
                </span>
            </button>
            <span className="profile-dropdown-brace profile-dropdown-brace--right">
                {' }'}
            </span>
            <div className={`profile-dropdown-list-container ${open ? 'profile-dropdown-list-container--open' : 'profile-dropdown-list-container--closed'}`}>
                <ul
                    tabIndex={-1}
                    className={`profile-dropdown-list ${open ? 'profile-dropdown-list--open' : 'profile-dropdown-list--closed'}`}
                    role="listbox"
                >
                    {displayOptions.map(opt => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={opt.value === value}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                            className={`profile-dropdown-item ${opt.value === value ? 'profile-dropdown-item--selected' : 'profile-dropdown-item--unselected'}`}
                            onMouseDown={e => e.preventDefault()}
                        >
                            <span className={`profile-dropdown-item-text ${opt.value === value ? 'profile-dropdown-item-text--selected' : 'profile-dropdown-item-text--unselected'}`}>
                                {opt.label}
                            </span>
                            {opt.value === value && (
                                <span
                                    className="profile-dropdown-checkmark"
                                    aria-hidden="true"
                                >
                                    ✓
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="profile-dropdown-overlay"
                    tabIndex={-1}
                />
            )}
        </div>
    );
}
