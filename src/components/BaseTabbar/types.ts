export interface TabItem {
  index: number;
  title: string;
  name?: string;
  path: string;
  icon: string;
  route: string;
}

export type TabList = TabItem[];
