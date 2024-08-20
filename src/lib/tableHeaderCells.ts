import { HeadCell } from "@/lib/interface";

export const tableHeaderCells: HeadCell[] = [

    {
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Name",
    },
    {
        id: "stars",
        numeric: true,
        disablePadding: false,
        label: "Stars"
    },
    {
        id: "repository_url",
        numeric: false,
        disablePadding: false,
        label: "Owner",
    },
]