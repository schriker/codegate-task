import { HeadingPropsType } from '../../types/heading';

function Heading({ children }: HeadingPropsType) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}

export default Heading;
