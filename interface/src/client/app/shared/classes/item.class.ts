export class Item {
    site: Site = new Site();
    properties: Field[] = [];
}

class Field {
    attribute: string;
    value: any;
}

class Site {
    name: string;
    id: number;
}