interface NavItemsModel {
    title: string;
    href?: string | null;
    type?: string;
    icon?: string;
    children?: NavItemsModel[];
}