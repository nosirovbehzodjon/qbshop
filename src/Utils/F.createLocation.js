export const createLocation = (pathname) => {
    let str = "home" + pathname;
    let createLoc = str
        .split("/")
        ?.map((item) => item[0]?.toUpperCase() + item?.slice(1, item.length))
        ?.join(" > ");
    return createLoc;
};
