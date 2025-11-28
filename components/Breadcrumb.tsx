import { Breadcrumb as BreadcrumbComp, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";

function Breadcrumb() {
  return (
    <BreadcrumbComp className="col-span-2 flex items-center px-4">
      <BreadcrumbList>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Welcome to Inka</BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbComp>
  );
}

export { Breadcrumb };
