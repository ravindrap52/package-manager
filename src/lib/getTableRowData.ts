import { Package } from "./interface";

export function getOwnerName(url: string) {
    if (!url) return "";
    const parsedUrl = new URL(url);
    const [, userName] = parsedUrl.pathname.split("/");
    return userName;
}

export function getTableRowData(TableData: Package[]) {
  return TableData.map(({name, stars, repository_url}, index) => {
    return {
        id: index,
        name,
        stars,
        repository_url: getOwnerName(repository_url)
    };
  });
}
