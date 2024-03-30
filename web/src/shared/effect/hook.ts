import type { EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

export const useStrictEffect = (effect: EffectCallback) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      effect();
    }
  }, [effect]);
};
