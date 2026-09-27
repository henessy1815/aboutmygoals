import type { ReactNode } from 'react'
import styles from './IconTile.module.css'

interface IconTileProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode // 안에 넣을 아이콘
}

// 연한 청록 배경의 둥근 사각형 안에 아이콘을 담는 틀
function IconTile({ size = 'md', className, children }: IconTileProps) {
  const classes = [styles.tile, styles[size], className].filter(Boolean).join(' ')
  return <span className={classes}>{children}</span>
}

export default IconTile
