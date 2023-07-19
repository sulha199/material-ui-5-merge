import React from 'react';

interface Button2Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button2(props: Button2Props) {
  const { onClick, disabled, label } = props;

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}