export class Script {
    id: number;
    name: string;
    url: string;
    img: string;
    filename: string;
    inputs: Input[];
    item: Input[];
}

class Input {
    type: string;
    label: string;
    name: string;
    description: string;
    placeholder: string;
    values: any[]; // Array of preset values (for selects/radios/inputs with defaults)
    restriction: any;
}