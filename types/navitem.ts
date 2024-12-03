interface NavItemsModel {
    title: string;
    href: string;
    type: string;
    icon?: string;
    children: NavItemsModel[];
}