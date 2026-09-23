import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}
const isMobileUA = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

// The server snapshot is `false`, so pre-rendered HTML and hydration agree; the client value applies right after.
export function useIsMobile() {
  return useSyncExternalStore(subscribe, isMobileUA, () => false)
}
