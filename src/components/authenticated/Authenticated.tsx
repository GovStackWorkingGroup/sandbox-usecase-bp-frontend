import { getToken } from "../../utilities/token";

//this is whatever

export default function Authenticated({
  children,
  reverse,
}: {
  children: JSX.Element | JSX.Element[];
  reverse?: boolean;
}): JSX.Element | null {
  if (Array.isArray(children)) {
    if (getToken()) {
      return reverse ? children[1] : children[0];
    }
    if (children.length > 1) {
      return reverse ? children[0] : children[1];
    }
    return null;
  }
  if (reverse) {
    return !getToken() ? children : null;
  }
  return getToken() ? children : null;
}
