import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs, {
  BreadcrumbPaths,
} from "../../components/breadcrumbs/Breadcrumbs";

export default function ConstructionPermitApplication() {
  const { id } = useParams();
  const breadcrumbs: BreadcrumbPaths = [
    ["Housing", null],
    ["Construction Permit", "/housing/construction-permit"],
    [
      `Permit application #${id}`,
      `/housing/construction-permit/application/${id}`,
    ],
  ];
  return (
    <>
      <Breadcrumbs path={breadcrumbs} />
      <Outlet />
    </>
  );
}
