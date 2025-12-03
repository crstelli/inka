import { Breadcrumb as BreadcrumbComp, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";

function Breadcrumb() {
  return (
    <BreadcrumbComp className="flex items-center px-4 [grid-area:breadcrumb]">
      <BreadcrumbList>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Welcome to Inka</BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbComp>
  );
}

export { Breadcrumb };
