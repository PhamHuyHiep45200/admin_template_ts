
export interface SideBarChildrenType {
  title: string;
  pathName: string;
}

export interface SideBarType {
  pathName: string;
  pathNameActive: string;
  title: string;
  icon: () => JSX.Element;
  chidlren?: SideBarChildrenType[];
}
