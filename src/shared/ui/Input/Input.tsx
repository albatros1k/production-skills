import { ChangeEvent, FC, InputHTMLAttributes, SyntheticEvent, memo, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (val: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
  const { className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const ref = useRef<HTMLInputElement>(null);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(event.currentTarget.selectionStart);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input ref={ref} onFocus={onFocus} onBlur={onBlur} className={cls.input} type={type} value={value} onChange={onChangeHandler} onSelect={onSelect} {...otherProps} />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
