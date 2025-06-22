'use client';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import style from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export function Select({
  options = ['one', 'two', 'three', 'four'],
}: {
  options?: string[];
}) {
  const [state, setState] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [focus, setFocus] = useState<boolean | string | number>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' && input === '') {
        setState((prev) => prev.slice(0, -1));
      }
    };

    document.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'ArrowDown') {
        setFocus((prev: any) => (prev < options.length - 1 ? ++prev : 0));
      } else if (e.key === 'ArrowUp') {
        setFocus((prev: any) => (prev > 0 ? --prev : options.length - 1));
      } else if (e.key === 'Enter') {
        if (!isNaN(+focus)) {
          setState([...state, options[+focus]]);
          setInput('');
        }
      }
    });
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  useClickOutside(ref, () => {
    setFocus(false);
  }, [ref]);

  return (
    <div
      className={style.container}
      data-focus={focus}
      onFocus={() => setFocus(0)}
      onClick={() => setFocus(0)}
      ref={ref}
    >
      <div className={style.input_container}>
        <div className={style.selected_container}>
          {state.map((item: string) => (
            <div key={item} className={style.selected}>
              {item}
              <X
                onClick={() => setState(state.filter((i) => i !== item))}
                className={style.x}
              />
            </div>
          ))}
        </div>
        <input
          type="text"
          className={style.input}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className="">{input}</div>
      </div>
      <div className={style.options_container}>
        {focus !== false
          ? options
              ?.filter((item) => item.includes(input) && !state.includes(item))
              .map((item: string, index: number) => (
                <div
                  key={item}
                  className={style.option}
                  onClick={() => {
                    setState([...state, item]);
                  }}
                  {...(focus == index && { 'data-focus': true })}
                >
                  {item}
                </div>
              ))
          : null}
      </div>
    </div>
  );
}
