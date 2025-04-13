"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "@/components/ui/table";
import { useMemo, useState } from "react";

import "@/lib/surchagePrototypes";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface DataTableProps {
  data: any[];
  theadTable: string[];
  tabColSearching: string[];
  detailedProperties: DetailedPropertiesProps[];
  itemsPerPage?: number;
  itemsPerButton?: number;
  canSearch?: boolean;
  CallbackLine?: (line: any) => void;
}

interface DetailedPropertiesProps {
  type: "checkbox" | "text" | "html" | "select" | "image" | "status";
  name: string;
}

const DataTable = (props: DataTableProps) => {
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [changeEntriesPerPage, setChangeEntriesPerPage] = useState(
    props.itemsPerPage || 40
  );
  const [ItemsPerButton, setItemsPerButton] = useState(
    props.itemsPerButton || 5
  );
  const [entriesPerPageList, setEntriesPerPageList] = useState([
    {
      text: 20,
      value: 20,
    },
    {
      text: 30,
      value: 30,
    },
    {
      text: 40,
      value: 40,
    },
    {
      text: 50,
      value: 50,
    },
    {
      text: 100,
      value: 100,
    },
    {
      text: 150,
      value: 150,
    },
    {
      text: 200,
      value: 200,
    },
  ]);

  const filteringData = useMemo(() => {
    return props.data.filterString(searchItem, props.tabColSearching);
  }, [searchItem, props.data, props.tabColSearching]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteringData.length / changeEntriesPerPage);
  }, [changeEntriesPerPage, filteringData]);

  const displayRange = useMemo(() => {
    const start = (currentPage - 1) * changeEntriesPerPage + 1;
    const end = Math.min(
      start + changeEntriesPerPage - 1,
      filteringData.length
    );
    return `${start} à ${end} entrées`;
  }, [currentPage, filteringData, changeEntriesPerPage]);

  const displayedData = useMemo(() => {
    if (searchItem) {
      setCurrentPage(1);
    }
    const start = (currentPage - 1) * changeEntriesPerPage;
    const end = start + changeEntriesPerPage;
    return filteringData.slice(start, end);
  }, [currentPage, filteringData, changeEntriesPerPage, searchItem]);

  const getColorBadge = (status: string) => {
    return { published: "bg-green-500" }[status];
  };

  const getTextBadge = (status: string) => {
    return { published: "Publié" }[status];
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-1 items-center">
        {props.canSearch && (
          <Input
            placeholder="Rechercher..."
            value={searchItem}
            onChange={(event) => setSearchItem(event.target.value)}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {props.theadTable.map((head, index) => (
                <TableHead key={`head-${index}`}> {head} </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedData.map((line: any, position) => (
              <TableRow
                key={`line-${position}`}
                className={cn(
                  typeof props.CallbackLine == "function" && "cursor-pointer"
                )}
                onClick={() => {
                  if(typeof props.CallbackLine == "function"){
                    props.CallbackLine(line)
                  }
                }}
              >
                {props.detailedProperties.map((col, index) => (
                  <TableCell key={`col-${index}`}>
                    {col.type == "text" && <p>{line[col.name]}</p>}
                    {col.type == "status" && (
                      <Badge className={getColorBadge(line[col.name])}>
                        {getTextBadge(line[col.name])}
                      </Badge>
                    )}
                    {col.type == "image" && (
                      <Image
                        src={line[col.name]}
                        width={30}
                        height={30}
                        alt="image"
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
