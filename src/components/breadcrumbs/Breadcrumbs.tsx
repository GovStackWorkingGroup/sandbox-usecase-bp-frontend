import HomeIcon from "@assets/icons/home.svg?react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
type BreadcrumbElement = [string, string | null];
export type BreadcrumbPaths = BreadcrumbElement[];

interface BreadcrumbsProps {
  path: BreadcrumbPaths;
}

const getBreadcrumbLinkProps = (path: string | null) => {
  if (path) {
    return {
      href: path,
    };
  }
  return;
};

export default function Breadcrumbs({ path = [] }: BreadcrumbsProps) {
  console.log(path);
  return (
    <Box w="100%" mb="40px">
      <Breadcrumb spacing="0px" separator={<ChevronRightIcon />}>
        <BreadcrumbItem>
          <BreadcrumbLink padding="12px 6px" as={RouterLink} to="/">
            <HomeIcon />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {path.map(([title, pathname], index) => (
          <BreadcrumbItem
            key={pathname}
            isCurrentPage={index === path.length - 1 || !pathname}
          >
            <BreadcrumbLink
              padding="12px 6px"
              {...getBreadcrumbLinkProps(pathname)}
            >
              {title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
}
