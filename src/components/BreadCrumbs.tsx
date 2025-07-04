import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./ui/breadcrumb";

const BreadCrumbs = () => {
  return (
         <Breadcrumb>
            <BreadcrumbList className="text-sm text-gray-600 font-medium">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <span className="hover:text-black text-lg transition opacity-[0.7] cursor-pointer">
                    Workspace
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-4xl" />

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <span className="hover:text-black text-lg transition opacity-[0.7] cursor-pointer">
                    Folder 2
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <span className="text-gray-900 text-lg cursor-pointer">
                    Spreadsheet 3
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbEllipsis className="size-6 hover:text-black transition opacity-[0.7] cursor-pointer" />
            </BreadcrumbList>
          </Breadcrumb>
  )
}

export default BreadCrumbs