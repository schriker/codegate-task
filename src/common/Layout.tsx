import { LayoutPropsType } from '../types/layout';

function Layout({ children }: LayoutPropsType) {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col w-full px-4 pt-10 sm:max-w-xl sm:px-0">
        {children}
      </div>
    </div>
  );
}

export default Layout;
