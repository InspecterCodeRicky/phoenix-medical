"use client";
import {
  Calendar,
  CalendarDays,
  ChevronDown,
  MessagesSquare,
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



const BASE_URL_ADMIN = process.env.NEXT_PUBLIC_APP_PATH_ADMIN!

// Menu items.
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
        title: "Demandes",
        url: "/devis/demandes",
      },
      {
        title: "Listing",
        url: "/devis/listing",
      },
    ],
  },
  {
    title: "Catalogue",
    url: "/catalogue",
    icon: Tag,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname == path;
  };
  return (
    <Sidebar>
      <SidebarHeader className="h-[52px] flex justify-center">
        <Link href={BASE_URL_ADMIN} className="text-primary font-bold">Phoenix Médical</Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                !item.children ? (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={BASE_URL_ADMIN+item.url}
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
                                <Link href={BASE_URL_ADMIN+child.url}>
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
