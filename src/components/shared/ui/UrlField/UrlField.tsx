import { ReactNode } from "react";
import { Link, useRecordContext } from "react-admin";

interface Props {
  source: string;
  resource: string;
  children?: ReactNode;
  className?: string;
}

export const UrlField = ({ className, children, source, resource }: Props) => {
  const record = useRecordContext();

  let url = record;
  source.split(".").forEach((str) => {
    url = url[str];
  });

  if (!record) return null;
  return (
    <Link
      className={className}
      to={`${import.meta.env.VITE_PUBLIC_URL}/#/${resource}/${url}`}
      target="_blank"
    >
      {children}
    </Link>
  );
};
