export interface IGeofence {
    id: number;
    deviceName: string;
    area: string;
    description: string;
    calender: string;
    attributes:IAttributes[];
}

export interface IAttributes {
    name: string;
    value: string;
    
}