"use client";

import {
  Calendar,
  CalendarDays,
  ChevronDown,
  MessagesSquare,
  Shield,
  Tag,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app.store";
import { useCallback, useEffect, useMemo } from "react";

const BASE_URL_ADMIN = process.env.NEXT_PUBLIC_APP_PATH_ADMIN!;

const items = [
  {
    title: "Calendrier",
    url: "/appointement",
    icon: CalendarDays,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessagesSquare,
  },
  {
    title: "Devis",
    icon: Calendar,
    children: [
      {
        title: "Demandes de devis",
        url: "/devis/demandes",
      },
      {
        title: "Listing de devis",
        url: "/devis/listing",
      },
    ],
  },
  {
    title: "Catalogue",
    url: "/catalogue",
    icon: Tag,
  },
  {
    title: "Mentions légales",
    url: "/mentions-legales",
    icon: Shield,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  const memoizedItems = useMemo(() => items, []);

  const setBreadcrumbItems = useAppStore((state) => state.setIsBreadcrumbItems);
  const breadcrumbItems = useAppStore((state) => state.breadcrumbItems);

  // const findItemByUrl = (itemsList :  any[], url : string) : any | null => {
  //   for (const item of itemsList) {
  //     if (item.url === url) {
  //       return item;
  //     }
  //     if (item.children) {
  //       const foundChild = findItemByUrl(item.children, url);
  //       if (foundChild) {
  //         return foundChild;
  //       }
  //     }
  //   }
  //   return null;
  // };

  const findItemByUrl = useCallback((itemsList: any[], url: string): any | null => {
    for (const item of itemsList) {
      if (item.url === url) {
        return item;
      }
      if (item.children) {
        const foundChild = findItemByUrl(item.children, url);
        if (foundChild) {
          return foundChild;
        }
      }
    }
    return null;
  }, []);

  useEffect(() => {
    const cleanPathname = pathname.replace(
      new RegExp(`^${BASE_URL_ADMIN}`),
      ""
    );
    

    const matchedItem = findItemByUrl(items, cleanPathname);

    if (matchedItem) {
      setBreadcrumbItems([{ title: matchedItem.title, url: matchedItem.url }]);
    } else {
      setBreadcrumbItems([]);
    }
  }, [pathname, setBreadcrumbItems, findItemByUrl]);

  return (
    <Sidebar>
      <SidebarHeader className="h-[52px] flex justify-center">
        <Link href={BASE_URL_ADMIN} className="text-primary font-bold">
          Phoenix Médical
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {memoizedItems.map((item) =>
                !item.children ? (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={BASE_URL_ADMIN + item.url}
                        className={cn(
                          isActive(item.url) &&
                            "bg-primary hover:!bg-primary text-white hover:!text-white"
                        )}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <Collapsible
                    key={item.title}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuButton>
                                <Link
                                  href={BASE_URL_ADMIN + child.url}
                                  className={cn(
                                    isActive(child.url) &&
                                      "bg-primary text-white"
                                  )}
                                >
                                  <span>{child.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
