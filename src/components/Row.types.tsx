interface Gutter {
  x: number;
  y: number;
}

export interface RowProps {
  align?: 'flex-end' | 'flex-start' | 'center';
  gutter: Gutter;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between';
  wrap?: boolean;
}
